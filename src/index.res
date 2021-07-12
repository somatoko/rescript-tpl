switch ReactDOM.querySelector("#root") {
| None => Js.log("Unable to mount app")
| Some(n) => ReactDOM.render(<App />, n)
}
