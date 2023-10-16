pub fn fibonacci(n: i32) -> i32 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    fibonacci(n - 1) + fibonacci(n - 2)
}

#[cfg(test)]
mod tests {
    use crate::fibonacci;

    #[test]
    fn zeroth() {
        let result = fibonacci(0);
        assert_eq!(result, 0);
    }

    #[test]
    fn first() {
        let result = fibonacci(1);
        assert_eq!(result, 1);
    }

    #[test]
    fn nth() {
        let result = fibonacci(10);
        assert_eq!(result, 55);
    }
}
