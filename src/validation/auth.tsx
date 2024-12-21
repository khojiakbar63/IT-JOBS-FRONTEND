"use client"
import { z } from "zod"
// Validate Sign Up Schema
export const validateSignUpSchema = z.object({
  name: z.string({required_error: "Name is required"})
  .min(1, {message: "Name must be at least 1 characters long"}),
  surname: z.string().min(1, {message: "Surname must be at least 1 characters long"}),
  email: z.string({required_error: "Email is required"})
  .email({message: "Invalid email address"}),
  password: z.string({required_error: "Password is required"})
  .min(5, {message: "Password must be at least 5 characters long"})
  .max(10, {message: "Password must be at most 10 characters long"})
})

// 
export const validateSignInSchema = z.object({
    email: z.string({required_error: "Email is required"})
    .email({message: "Invalid email address"}),
    password: z.string({required_error: "Password is required"})
    .min(5, {message: "Password must be at least 5 characters long"})
    .max(10, {message: "Password must be at most 10 characters long"})
  })