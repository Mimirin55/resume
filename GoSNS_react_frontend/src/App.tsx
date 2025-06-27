import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("APIレスポンス:", data);
      })
      .catch((err) => {
        console.error("通信エラー:", err);
      });
  }, []);

  return (
    <div>
      <h1>Goと通信テスト中！</h1>
    </div>
  );
}

export default App;
