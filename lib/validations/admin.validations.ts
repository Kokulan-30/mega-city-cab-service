import { date, z } from "zod";

export const LocationSchema = z.object({
  location: z.string().min(3).max(130),
});

export const DistanceSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  distance: z.number().min(1),
});

export const ManagerSchema = z.object({
  managerName: z.string().min(3),
  nicNo: z.string().min(7),
  phoneNo: z.string().min(10).max(10),
  email: z.string().optional(),
  carMade: z.string().min(3),
  carModel: z.string().min(1),
  carNo: z.string().min(3),
  carPhoto: z.custom<File[]>().optional(),
});

export const DriverSchema = z.object({
  driverName: z.string().min(3),
  nicNo: z.string().min(7),
  phoneNo: z.string().min(10),
  email: z.string().optional(),
  address: z.string().min(1),
  driverPhoto: z.custom<File[]>().optional(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignupSchema = z
  .object({
    name: z.string().min(3),
    nicNo: z.string().min(7),
    phoneNo: z.string().min(10).max(10),
    address: z.string().optional(),
    email: z.string().email().min(3),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const BookingSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  date: z.string().date(),
  hrsTime: z.string().min(1),
  minTime: z.string().min(1),
  pickupLocation: z.string().min(1),
});
