use axum::body::Bytes;
use axum::http::StatusCode;
use axum::{routing::post, Router};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // initialize tracing
    tracing_subscriber::fmt::init();

    // build our application with a route
    let app = Router::new()
        .route("/factorial", post(factorial))
        .route("/fibonacci", post(fibonacci));

    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    tracing::debug!("listening on {}", addr);
    println!("Starting server!");
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn factorial(body: Bytes) -> Result<String, StatusCode> {
    if let Ok(string) = String::from_utf8(body.to_vec()) {
        let num: i64 = match string.parse::<i64>() {
            Ok(res) => res,
            Err(_e) => return Err(StatusCode::BAD_REQUEST),
        };
        let result = rust_math::factorial(num);
        Ok(result.to_string())
    } else {
        Err(StatusCode::BAD_REQUEST)
    }
}

async fn fibonacci(body: Bytes) -> Result<String, StatusCode> {
    let string = match String::from_utf8(body.to_vec()) {
        Ok(s) => s,
        Err(_e) => return Err(StatusCode::BAD_REQUEST),
    };

    let num = match string.parse::<i32>() {
        Ok(n) => n,
        Err(_e) => return Err(StatusCode::BAD_REQUEST),
    };

    let result = rust_math::fibonacci(num);

    Ok(result.to_string())
}
