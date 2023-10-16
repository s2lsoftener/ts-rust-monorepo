pub fn factorial(n: i64) -> i64 {
    if n == 0 {
        return 1;
    }

    let mut product = 1;
    for i in 1..=n {
        product *= i;
    }

    product
}

#[cfg(test)]
mod tests {
    use crate::factorial;

    #[test]
    fn zero_factorial() {
        let result = factorial(0);
        assert_eq!(result, 1);
    }

    #[test]
    fn five_factorial() {
        let result = factorial(5);
        assert_eq!(result, 120);
    }
}
