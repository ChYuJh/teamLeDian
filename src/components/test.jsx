import React from "react";
import axios from "axios";

class Test extends React.Component {
  state = {
    error: null,
  };

  handleRedirect = async () => {
    try {
      // 向後端發送 POST 請求
      // await axios.post("http://localhost:8000/redirect");
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      // 向後端發送 POST 請求獲取重定向的 URL
      let serverData = {
        // 請填寫您的數據
      };
      await axios.post(
        "http://localhost:8000/test0231/56787",
        JSON.stringify(serverData),
        config
      );
    } catch (error) {
      console.error("Error:", error);
      this.setState({ error: error.message }); // 將錯誤訊息存儲在狀態中
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        {error && <p>Error: {error}</p>} {/* 使用條件渲染顯示錯誤訊息 */}
        <button onClick={this.handleRedirect}>Redirect</button>
      </div>
    );
  }
}

export default Test;
