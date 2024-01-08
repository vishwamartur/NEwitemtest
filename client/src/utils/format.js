// Import any libraries or dependencies that you need
import { format } from "date-fns";

// Define and export your helper functions
// For example, a function to format a date as YYYY/MM/DD
export function formatDate(date) {
  return format(date, "yyyy/MM/dd");
}

// For example, a function to format a number as currency
export function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

// For example, a function to format a string as title case
export function formatTitle(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
