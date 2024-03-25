var express = require("express");
const session = require("express-session");
var cors = require("cors");
var app = express();
require("dotenv").config();
const { HmacSHA256 } = require("crypto-js");
const Base64 = require("crypto-js/enc-base64");

let axios = require("axios");

app.listen(8000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: "ledian", // 用于对 session 数据进行加密的密钥，可以是任意字符串
    resave: false, // 是否每次请求都重新保存 session 数据，默认为 true
    saveUninitialized: false, // 是否保存未初始化的 session 数据，默认为 false
  })
);

var mysql = require("mysql");
var conn = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "lediandata",
});

conn.connect(function (err) {
  console.log(err);
});

app.get("/index/branch", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});
app.get("/index/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});
app.get("/index/products", function (req, res) {
  conn.query(
    "select product_name, product_img, brand_id, product_id from products where product_img != '無' and product_class_1 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/branch/:id", function (req, res) {
  conn.query(
    "select * from branch where brand_id = ?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/brand/:id", function (req, res) {
  conn.query(
    "select * from brand where brand_id = ?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 全部飲料
app.get("/all/products", function (req, res) {
  conn.query("select * from products", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/all/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-全部
app.get("/dian/address", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-地區
app.get("/dian/address_400", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 400",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_401", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 401",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_402", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 402",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_403", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 403",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_404", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 404",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_406", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 406",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_407", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 407",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_408", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 408",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_411", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 411",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_412", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 412",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_413", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 413",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_414", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 414",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_420", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 420",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_421", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 421",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_422", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 422",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_423", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 423",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_426", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 426",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_427", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 427",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_428", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 428",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_429", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 429",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_432", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 432",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_433", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 433",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_434", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 434",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_435", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 435",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_436", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 436",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_437", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 437",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_438", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 438",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 店家部分-評分(全)
app.get("/dian/scoreall", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-評分
app.get("/dian/score_4.5", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 4.5 and 5.0 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_4.0", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 4.0 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_3.5", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 3.5 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_3.0", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 3.0 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 訂購頁面連資料庫
app.get("/index/order/9", function (req, res) {
  // res.send('ok');
  conn.query(
    "SELECT * FROM branch LEFT join brand on branch.brand_id = brand.brand_id WHERE branch.branch_id=1",
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 訂購頁面拿取尺寸資料
// app.get("/index/order/9",function(req,res){
//     // res.send('ok');
//     conn.query("select*from brand,sizes where brand.brand_id = sizes.brand_id", [ ],
//         function(err,rows) {
//             res.send(JSON.stringify(rows));
//         }
//     )
// })

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
app.use(bodyParser.json());

//註冊
app.post("/signup", async function (req, res) {
  const { phone, email, password, password2 } = req.body;

  // 驗證電子郵件格式
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = emailRegex.test(email.toLowerCase());

  // 驗證手機號碼格式
  const phoneRegex = /^09[0-9]{8}$/;
  const isPhoneValid = phoneRegex.test(phone);

  if (!isEmailValid) {
    console.log("無效的電子郵件格式");
    return res.status(400).json({ error: "無效的電子郵件格式" });
  }

  if (!isPhoneValid) {
    console.log("無效的手機號碼格式");
    return res.status(400).json({ error: "無效的手機號碼格式" });
  }

  // 檢查密碼是否匹配
  if (password !== password2) {
    console.log("密碼與確認密碼不匹配");
    return res.status(400).json({ error: "密碼與確認密碼不匹配" });
  }

  // 檢查電話號碼和電子郵件是否已被使用
  conn.query(
    "SELECT * FROM users WHERE phone = ? OR email = ?",
    [phone, email],
    function (err, rows) {
      if (err) {
        console.error("查詢用戶時發生錯誤:", err);
        return res.status(500).json({ error: "查詢用戶時出錯" });
      }

      if (rows.length > 0) {
        // 電話號碼或電子郵件已被使用
        const existingUser = rows[0];
        if (existingUser.phone === phone) {
          console.log(`${phone} 已被使用`);
          return res.status(400).json({ error: `${phone} 已被使用` });
        }
        if (existingUser.email === email) {
          console.log(`${email} 已被使用`);
          return res.status(400).json({ error: `${email} 已被使用` });
        }
      }

      // 如果以上檢查都通過，則註冊新用戶
      bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
          console.error("加密密碼時發生錯誤:", err);
          return res.status(500).json({ error: "加密密碼時出錯" });
        }

        conn.query(
          "INSERT INTO users (phone, email, password, createtime) VALUES (?, ?, ?, ?)",
          [phone, email, hashedPassword, onTime()],
          function (err, result) {
            if (err) {
              console.error("註冊新用戶時發生錯誤:", err);
              return res.status(500).json({ error: "註冊新用戶失敗" });
            }

            // 返回成功響應
            res.status(200).json({ message: "User registered successfully" });
          }
        );
      });
    }
  );
});

// 登入路由
app.post("/login", async function (req, res) {
  const { email, password } = req.body;

  // 驗證電子郵件格式
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = emailRegex.test(email.toLowerCase());

  if (!isEmailValid) {
    console.log("無效的電子郵件格式");
    return res.status(400).json({ error: "無效的電子郵件格式" });
  }

  // 從資料庫中查詢與提供的電子郵件匹配的使用者
  conn.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async function (error, results, fields) {
      if (error) {
        console.error("查詢資料庫時出錯:", error);
        return res.status(500).json({ error: "資料庫查詢錯誤" });
      }

      if (results.length === 0) {
        console.log("會員不存在");
        return res.status(404).json({ error: "會員不存在" });
      }

      const user = results[0]; // 獲取查詢到的使用者資訊

      try {
        // 使用 bcrypt.compare 方法驗證密碼是否匹配
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // 如果使用者存在且密碼正確，則登入成功
          console.log("使用者登入成功:", user);

          // 將使用者的 ID 存儲到會話中
          req.session.userId = user.user_id;
          req.session.userImg = user.user_img;
          console.log("會員的 ID 是:", req.session.userId);

          return res.status(200).json({
            message: "使用者登入成功",
            user_id: user.user_id,
            user_img: user.user_img,
          });
        } else {
          console.log("密碼不正確");
          return res.status(401).json({ error: "密碼不正確" });
        }
      } catch (error) {
        console.error("登入時出錯:", error);
        return res.status(500).json({ error: "內部伺服器錯誤" });
      }
    }
  );
});

// 登出路由
app.post("/logout", function (req, res) {
  // 清除會員 session
  req.session.destroy(function (err) {
    if (err) {
      console.error("登出时出错:", err);
      return res.status(500).json({ error: "登出时出错" });
    }
    console.log("會員的 session 已成功清除");
    return res.status(200).json({ message: "用户已成功登出" });
  });
});

//獲取添加時間
const onTime = () => {
  const date = new Date();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const hh = date.getHours();
  const mi = date.getMinutes();
  const ss = date.getSeconds();

  return [
    date.getFullYear(),
    "-" + (mm > 9 ? "" : "0") + mm,
    "-" + (dd > 9 ? "" : "0") + dd,
    " " + (hh > 9 ? "" : "0") + hh,
    ":" + (mi > 9 ? "" : "0") + mi,
    ":" + (ss > 9 ? "" : "0") + ss,
  ].join("");
};

// 忘記密碼
app.post("/forgotPassword", async function (req, res) {
  const { email } = req.body;

  // 在資料庫中查找是否存在該電子郵件
  conn.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    function (error, results, fields) {
      if (error) {
        console.error("查詢資料庫時出錯:", error);
        return res.status(500).json({ error: "資料庫查詢錯誤" });
      }

      // 如果找到匹配的使用者，表示電子郵件存在
      if (results.length > 0) {
        console.log(`${email} 存在，郵件已發送`);
        res.status(200).json({ message: `${email} 存在，郵件已發送` });
      } else {
        console.log(`${email} 不存在`);
        res.status(404).json({ error: `${email} 不存在` });
      }
    }
  );
});

// user 是大家共用的路由
app.get("/user/:id", function (req, res) {
  const userId = req.params.id; //從路由拿到id
  const isLoggedIn = req.session.userId != null; // 檢查用戶是否登入

  if (!isLoggedIn) {
    // 沒有登入是來賓，一樣可以瀏覽網站
    const guestData = {
      isLoggedIn: false,
    };
    return res.json(guestData);
  }

  conn.query(
    "SELECT * FROM users WHERE user_id = ?;",
    [userId],
    function (err, rows) {
      if (err) {
        console.error("會員資訊出錯:", err);
        return res.status(500).json({ error: "會員資訊出錯" });
      }
      if (rows.length === 0) {
        console.log("找不到會員");
        return res.status(404).json({ error: "找不到會員" });
      }
      const userData = rows[0]; // 獲取第一個匹配的會員
      res.json(userData); //
    }
  );
});

// 縣市表
app.get("/city", function (req, res) {
  conn.query("SELECT * FROM city", function (err, rows) {
    if (err) {
      console.error("Failed to fetch city:", err);
      return res.status(500).json({ error: "Failed to fetch city" });
    }
    res.json(rows);
  });
});

//區域表
app.get("/region/:cityId", function (req, res) {
  const cityId = req.params.cityId;
  conn.query(
    "SELECT * FROM region WHERE city_id = ?",
    [cityId],
    function (err, rows) {
      if (err) {
        console.error("Failed to fetch region:", err);
        return res.status(500).json({ error: "Failed to fetch region" });
      }
      res.json(rows);
    }
  );
});

app.get("/cartlist/:id", function (req, res) {
  conn.query(
    "SELECT  *,  SUM(cartdetails.item_quantity) as total_item ,  SUM(cartdetails.total_price*cartdetails.item_quantity) as total_item_price FROM branch LEFT join  cartdetails ON branch.branch_id=cartdetails.branch_id LEFT join brand on cartdetails.brand_id=brand.brand_id  WHERE user_id=1   GROUP BY cart_id  ",
    [],
    (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(JSON.stringify(rows));
    }
  );
});

//購物車明細
app.get("/cartPay/:id", function (req, res) {
  console.log(req.params.id);
  conn.query(
    " SELECT * FROM cartdetails LEFT join branch on cartdetails.branch_id=branch.branch_id left join brand on brand.brand_id=cartdetails.brand_id  WHERE cart_id=?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

//商品編輯
app.get("/itemedit/:id", function (req, res) {
  console.log(req.params.id);
  conn.query(
    `SELECT * FROM products LEFT join cartdetails on products.product_id=cartdetails.product_id LEFT join branch on branch.branch_id =cartdetails.branch_id LEFT join brand on brand.brand_id=cartdetails.brand_id LEFT JOIN sizes on sizes.brand_id = brand.brand_id LEFT join temperatures on temperatures.brand_id = brand.brand_id LEFT JOIN ingredients on ingredients.brand_id=brand.brand_id LEFT join sugars on sugars.brand_id=brand.brand_id WHERE cartdetails.item_id=?;`,
    [req.params.id],
    function (err, rows) {
      let newdata = [
        {
          size_choose: [
            {
              size: rows[0].choose_size_0 ? rows[0].size_0_name : "",
              temperatures: rows[0].choose_size_0,
              products_price: rows[0].products_price_0,
            },
            {
              size: rows[0].choose_size_1 ? rows[0].size_1_name : "",
              temperatures: rows[0].choose_size_1,
              products_price: rows[0].products_price_1,
            },
            {
              size: rows[0].choose_size_2 ? rows[0].size_1_name : "",
              temperatures: rows[0].choose_size_2,
              products_price: rows[0].products_price_2,
            },
          ],
        },
        {
          temperature_choose: [
            rows[0].temperature_0,
            rows[0].temperature_1,
            rows[0].temperature_2,
            rows[0].temperature_3,
            rows[0].temperature_4,
            rows[0].temperature_5,
            rows[0].temperature_6,
            rows[0].temperature_7,
          ],
        },
        {
          sugar_choose: [
            rows[0].sugar_0,
            rows[0].sugar_1,
            rows[0].sugar_2,
            rows[0].sugar_3,
            rows[0].sugar_4,
            rows[0].sugar_5,
            rows[0].sugar_6,
            rows[0].sugar_7,
            rows[0].sugar_8,
            rows[0].sugar_9,
          ],
        },

        {
          ingredient: [
            {
              ingredient_choose: rows[0].ingredient_0,
              ingredient_price: rows[0].ingredient_price_0,
            },
            {
              ingredient_choose: rows[0].ingredient_1,
              ingredient_price: rows[0].ingredient_price_1,
            },
            {
              ingredient_choose: rows[0].ingredient_2,
              ingredient_price: rows[0].ingredient_price_2,
            },
            {
              ingredient_choose: rows[0].ingredient_3,
              ingredient_price: rows[0].ingredient_price_3,
            },
            {
              ingredient_choose: rows[0].ingredient_4,
              ingredient_price: rows[0].ingredient_price_4,
            },
            {
              ingredient_choose: rows[0].ingredient_5,
              ingredient_price: rows[0].ingredient_price_5,
            },
            {
              ingredient_choose: rows[0].ingredient_6,
              ingredient_price: rows[0].ingredient_price_6,
            },
            {
              ingredient_choose: rows[0].ingredient_7,
              ingredient_price: rows[0].ingredient_price_7,
            },
            {
              ingredient_choose: rows[0].ingredient_8,
              ingredient_price: rows[0].ingredient_price_8,
            },
            {
              ingredient_choose: rows[0].ingredient_9,
              ingredient_price: rows[0].ingredient_price_9,
            },
            {
              ingredient_choose: rows[0].ingredient_10,
              ingredient_price: rows[0].ingredient_price_10,
            },
            {
              ingredient_choose: rows[0].ingredient_11,
              ingredient_price: rows[0].ingredient_price_11,
            },
          ],
        },

        {
          ingredient_price: [
            rows[0].ingredient_price_0,
            rows[0].ingredient_price_2,
            rows[0].ingredient_price_3,
            rows[0].ingredient_price_4,
            rows[0].ingredient_price_5,
            rows[0].ingredient_price_6,
            rows[0].ingredient_price_7,
            rows[0].ingredient_price_8,
            rows[0].ingredient_price_9,
            rows[0].ingredient_price_1,
            rows[0].ingredient_price_1,
          ],
        },
        { brand_note: rows[0].brand_note },
        {
          branch_name: rows[0].branch_name,
          branch_address: rows[0].branch_address,
          branch_phone: rows[0].branch_phone,
        },
        {
          product: {
            product_name: rows[0].product_name,
            product_img: rows[0].product_img,
            // choose_size_0: 0,
            // choose_size_1: 3,
            // choose_size_2: 0,
            choose_sugar: rows[0].choose_sugar,
            choose_ingredient: rows[0].choose_ingredient,
            products_price_0: rows[0].products_price_0,
            products_price_1: rows[0].products_price_1,
            products_price_2: rows[0].products_price_2,
          },
        },
        {
          cats_item: {
            item_size: rows[0].item_size,
            item_sugar: rows[0].item_sugar,
            item_temperatures: rows[0].item_temperatures,
            item_price: rows[0].item_price,
            item_ingredient: rows[0].item_ingredient,
            ingredient_price: rows[0].ingredient_price,
            item_quantity: rows[0].item_quantity,
            total_price: rows[0].total_price,
          },
        },
      ];
      console.log(newdata);
      res.send(JSON.stringify(newdata));
    }
  );
});

//營業時間
app.get("/branchinfo/:branchid", function (req, res) {
  conn.query(
    "SELECT * FROM `branch` WHERE branch_id = ?;",
    [req.params.branchid],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

//訂單寫入
// app.post("/cartPay", function (req, res) {
//   console.log("ok");
//   console.log(req.body);

//   const orderInfo = {
//     user_id: req.body.user_id,
//     branch_id: req.body.branch_id,
//     orders_total: req.body.orders_total,
//     orders_bag: req.body.orders_bag,
//     terms_of_payment: req.body.terms_of_payment,
//     invoicing_method: req.body.invoicing_method,
//     orders_bag_num: req.body.orders_bag_num,
//     usePoninter: req.body.usePoninter,
//     orders_status: req.body.orders_status,
//     payment_status: req.body.payment_status,
//     orders_pick_up: req.body.orders_pick_up,
//     updatetime: req.body.updatetime,
//     createtime: req.body.createtime,
//   };

//   const orderDetails = req.body.details;
//   let neworderDetails;

//   conn.query(
//     "INSERT INTO orders (user_id, branch_id, orders_total, orders_bag, terms_of_payment, invoicing_method, orders_bag_num,usePoninter,orders_status, payment_status, orders_pick_up,updatetime, createtime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)",
//     [
//       orderInfo.user_id,
//       orderInfo.branch_id,
//       orderInfo.orders_total,
//       orderInfo.orders_bag,
//       orderInfo.terms_of_payment,
//       orderInfo.invoicing_method,
//       orderInfo.orders_bag_num,
//       orderInfo.usePoninter,
//       orderInfo.orders_status,
//       orderInfo.payment_status,
//       orderInfo.orders_pick_up,
//       orderInfo.updatetime,
//       orderInfo.createtime,
//     ],
//     (err, results) => {
//       if (err) {
//         res.send(JSON.stringify(err));
//       } else {
//         // console.log("Inserted successfully.");
//         // console.log("Results:", results);

//         const orders_id = results.insertId;
//         neworderDetails = orderDetails.map((item) => {
//           item.orders_id = orders_id;
//           return [
//             item.orders_id,
//             item.details_name,
//             item.details_size,
//             item.details_sugar,
//             item.details_mperatures,
//             item.details_ingredient,
//             item.details_amount,
//             item.details_quantity,
//             item.details_total,
//             item.updatetime,
//             item.createtime,
//           ];
//         });
//         console.log(neworderDetails);
//         conn.query(
//           "INSERT INTO order_details (orders_id, details_name, details_size, details_sugar, details_mperatures, details_ingredient, details_amount, details_quantity, details_total, updatetime, createtime) VALUES  ?",
//           [neworderDetails],
//           (err) => {
//             if (err) {
//               console.log(JSON.stringify(err));
//             } else {
//               console.log("成功寫入訂單資訊、明細");
//             }
//           }
//         );
//       }
//     }
//   );
// });

//訂單寫入
app.post("/cartPay", function (req, res) {
  console.log("ok");
  console.log(req.body);

  const orderInfo = {
    user_id: req.body.user_id,
    branch_id: req.body.branch_id,
    orders_total: req.body.orders_total,
    orders_bag: req.body.orders_bag,
    terms_of_payment: req.body.terms_of_payment,
    invoicing_method: req.body.invoicing_method,
    orders_bag_num: req.body.orders_bag_num,
    usePoninter: req.body.usePoninter,
    orders_status: req.body.orders_status,
    payment_status: req.body.payment_status,
    orders_pick_up: req.body.orders_pick_up,
    updatetime: onTime(),
    createtime: onTime(),
  };
  const orderDetails = req.body.details;
  let neworderDetails;

  conn.query(
    "INSERT INTO orders (user_id, branch_id, orders_total, orders_bag, terms_of_payment, invoicing_method, orders_bag_num,usePoninter,orders_status, payment_status, orders_pick_up,updatetime, createtime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)",
    [
      orderInfo.user_id,
      orderInfo.branch_id,
      orderInfo.orders_total,
      orderInfo.orders_bag,
      orderInfo.terms_of_payment,
      orderInfo.invoicing_method,
      orderInfo.orders_bag_num,
      orderInfo.usePoninter,
      orderInfo.orders_status,
      orderInfo.payment_status,
      orderInfo.orders_pick_up,
      orderInfo.updatetime,
      orderInfo.createtime,
    ],
    (err, results) => {
      if (err) {
        res.send(JSON.stringify(err));
      } else {
        console.log("Inserted successfully.");
        console.log("Results:", results);

        const orders_id = results.insertId;
        neworderDetails = orderDetails.map((item) => {
          item.orders_id = orders_id;
          return [
            item.orders_id,
            item.details_name,
            item.details_size,
            item.details_sugar,
            item.details_mperatures,
            item.details_ingredient,
            item.details_amount,
            item.details_quantity,
            item.details_total,
            onTime(),
            onTime(),
          ];
        });

        console.log(neworderDetails);
        conn.query(
          "INSERT INTO order_details (orders_id, details_name, details_size, details_sugar, details_mperatures, details_ingredient, details_amount, details_quantity, details_total, updatetime, createtime) VALUES  ?",
          [neworderDetails],
          (err) => {
            if (err) {
              console.log(JSON.stringify(err));
            } else {
              console.log("成功寫入訂單資訊、明細");
            }
          }
        );
      }
    }
  );
});

//修改購物車內容
app.patch("/itemedit/:itemid", function (req, res) {
  console.log("修改");
  console.log(req.params.itemid);
  console.log(req.body);
  conn.query(
    "UPDATE cartdetails SET item_quantity= ?,  item_size= ?,item_sugar= ?,item_price=?,item_ingredient=?,ingredient_price=?,total_price=? WHERE item_id=?",
    [
      req.body.item_quantity,
      req.body.item_size,
      req.body.item_sugar,
      req.body.item_price,
      req.body.item_ingredient,
      req.body.ingredient_price,
      req.body.total_price,
      req.params.itemid,
    ],
    function (err, row) {
      if (err) {
        console.log(err);
      }
      console.log(row);
      console.log("成功");
    }
  );
});

//刪除購物車
app.delete("/cartdelete/:cartid", function (req, res) {
  console.log("刪除");
  console.log(req.params.cartid);
  // console.log(req.body);
  conn.query(
    "DELETE FROM cartdetails WHERE cart_id=?",
    [req.params.cartid],
    function (err, row) {
      if (err) {
        console.log(err);
      }
      console.log(row);
      console.log("已成功刪除");
    }
  );
});

//刪除購物車內容
app.delete("/itemdelete/:itemid", function (req, res) {
  console.log(req.params.itemid);
  conn.query(
    "DELETE FROM cartdetails WHERE cartdetails.item_id=?",
    [req.params.itemid],
    function (err, row) {
      if (err) {
        console.log(err);
      } else {
        console.log("已成功刪除");
      }
    }
  );
});

//line pay串接
// const SecretKey = "085beec8f76f130cf12838cfeb1835f2";
// const LINEPAY_CHANNEL_ID = 2004276099;
// const LINEPAY_VERSION = "v3";
// const LINEPAY_SITE = "https://sandbox-api-pay.line.me";
// function createSignature(uri, linePayBody) {
//   let nonce = parseInt(new Date().getTime() / 1000);
//   const string = `${SecretKey}/${LINEPAY_VERSION}${uri}${JSON.stringify(
//     linePayBody
//   )}${nonce}`;
//   const signature = Base64.stringify(HmacSHA256(string, SecretKey));
//   console.log(linePayBody, signature);
//   const headers = {
//     "Content-Type": "application/json",
//     "X-LINE-ChannelId": LINEPAY_CHANNEL_ID,
//     "X-LINE-Authorization-Nonce": nonce,
//     "X-LINE-Authorization": signature,
//   };
//   console.log("headersssssss" + headers);
//   return headers;
// }
// app
//   .post("/test0231/:orderId", async function (req, res) {
//     // ordertoDatabase();
//     try {
//       let orderDate;
//       let orders = {};
//       let { orderId } = req.params;
//       const row = await new Promise((resolve, reject) => {
//         conn.query("SELECT * FROM orders where orders_id=2", [], (err, row) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(row);
//           }
//         });
//       });

//       console.log(row[0]);
//       orderDate = {
//         amount: row[0].orders_total,
//         currency: "TWD",
//         packages: [
//           {
//             id: row[0].orders_id,
//             amount: Number(row[0].orders_total),
//             products: [
//               {
//                 name: "飲料",
//                 quantity: 1,
//                 price: Number(row[0].orders_total),
//               },
//             ],
//           },
//         ],
//         orderId: orderId,
//       };
//       console.log(orderDate);
//       const order = orderDate;
//       orders[order.orderId] = order;
//       console.log(orders);
//       console.log(order);

//       const linePayBody = {
//         ...order,
//         redirectUrls: {
//           confirmUrl: "https://localhost:3000/linepay/confirm",
//           cancelUrl: "https://localhost:3000/linepay/cancel",
//         },
//       };
//       console.log("linePayBody", linePayBody);
//       const uri = "/payments/request";
//       const headers = createSignature(uri, linePayBody);
//       //準備送給linepay
//       const url = `${LINEPAY_SITE}/${LINEPAY_VERSION}${uri}`;

//       const linePayRes = await axios.post(url, linePayBody, { headers });
//       console.log("linePayRes", linePayRes.data);
//       console.log(linePayRes.data.info);
//       if (linePayRes?.data?.returnCode === "0000") {
//         res.redirect(linePayRes?.data?.info.paymentUrl.web); //有成功返回linepay 付款網址但無法成功轉址
//       }
//       console.log("web", linePayRes?.data?.info.paymentUrl.web); //'https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=RUpIVkRJQ0lyR2FBL3hzRUFQVm5XaEFxSHlXWGlHWjVmUTVVdUR2ZHg4YUJuU0NmSGpFMzdWdU1VdW41UlhEbA',
//       console.log(linePayRes);
//     } catch (err) {
//       console.log(err);
//       res.end();
//     }
//   })
//   .get("/linepay/confirm", async (req, res) => {
//     const { transactionId, orderId } = req.query;
//     console.log(transactionId, orderId);

//     try {
//       const order = orders[orderId];
//       const linePayBody = {
//         amount: order.amount,
//         currency: "TWD",
//       };
//       const uri = `/payments/${transactionId}/confirm`;
//       const headers = createSignature(uri, linePayBody);
//       const url = `${LINEPAY_SITE}/${LINEPAY_VERSION}${uri}`;
//       const linePayRes = await axios.post(url, linePayBody, { headers });
//       console.log(linePayRes);
//       res.end();
//       //交易成功轉址
//     } catch (err) {
//       res.end();
//     }
//   });
