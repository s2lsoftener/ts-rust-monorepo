pub use rust_factorial::factorial;
pub use rust_fibonacci::fibonacci;

#[cfg(test)]
mod tests {
    use crate::*;

    #[test]
    fn imports_factorial() {
        let result = factorial(5);
        assert_eq!(result, 120);
    }

    #[test]
    fn imports_fibonacci() {
        let result = fibonacci(10);
        assert_eq!(result, 55);
    }
}
