// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "version_023";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Activate filter",
    key: "chars",
    tooltip: "Check this to restrict to certain characters.",
    checked: true,
    sub: [
        { name: "Main characters", key: "mchars" },
        { name: "Side characters", key: "schars" },
        { name: "sensei",    key: "sensei", checked:false}

    ]
  },
];

dataSet[dataSetVersion].characterData = 
[
    {
        name: "Maya Makinami",
        img: "1O6grVY.png",
        opts: {
          chars: ["mchars"],
          }
    },
    {
      name: "Molly MacCormack",
      img: "l8IrG7c.png",
      opts: {
        chars: ["mchars"],
        }
    },
    {
      name: "Io Ichimonji",
      img: "81pH7aS.png",
      opts: {
        chars: ["mchars"],
        }
    },
    {
    name: "Rin Rokuhara",
    img: "Gvt01e4.png",
    opts: {
      chars: ["mchars"],
      }
    },
    {
      name: "Yumi Yamaguchi",
      img: "UGgWm6r.png",
      opts: {
        chars: ["mchars"],
        }
      },
      {
        name: "Uta Ushibori",
        img: "slJLWfs.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Futaba Fukuyama",
        img: "rdEjqI3.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Touka Tsukioka",
        img: "YIMm8nQ.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Noriko Nakayama",
        img: "YYliHI2.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Yasu Yasui",
        img: "osHaLM8.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Otoha Okakura",
        img: "7k7Syrd.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Ayane Amamiya",
        img: "17j63tO.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Kirin Kanda",
        img: "ORBDgXF.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Miku Maruyama",
        img: "5eZXELT.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Makoto Miyamura",
        img: "s8FqbnW.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Tsuneyo Tojo",
        img: "5PgDD3k.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Sana Sakakibara",
        img: "DK8mCEj.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Chika Chosokabe",
        img: "TOklVAR.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Ami Arakawa",
        img: "zErT2m3.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Nodoka Nagasawa",
        img: "rCNRTMV.png",
        opts: {
          chars: ["mchars"],
          }
      },
      {
        name: "Kaori Kadowaki",
        img: "jOR91AO.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Karin Kanda",
        img: "0OlyWVl.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Haruka Hamasaki",
        img: "aXjzGyx.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Sara Sakakibara",
        img: "5PLKyIo.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Maki Miyamura",
        img: "8ROnzpJ.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Niki Nakayama",
        img: "RfszAQi.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Tsubasa Tsukioka",
        img: "qOZCN1k.png",
        opts: {
          chars: ["schars"],
          }
      },  
      {
        name: "Yuki Yamaguchi",
        img: "gm73pP0.png",
        opts: {
          chars: ["schars"],
          }
      },
      {
        name: "Wakana Watabe",
        img: "Qo3ooSn.png",
        opts: {
          chars: ["schars"],
          }
      },  
      {
        name: "Osako Osaka",
        img: "Zu9aOSI.png",
        opts: {
          chars: ["schars"],
          }
      },  
      {
        name: "Tsukasa Tsukioka",
        img: "kIBiXCi.png",
        opts: {
          chars: ["schars"],
          }
      },  
      {
        name: "Chinami Chosokabe",
        img: "QaFY6KY.png",
        opts: {
          chars: ["schars"],
          }
      }, 
      {
        name: "Imani Imai",
        img: "SwCkj8z.png",
        opts: {
          chars: ["schars"],
          }
      },   
      {
        name: "Sensei",
        img: "rPucp9W.png",
        opts: {
          chars: ["sensei"],
          }
      },  
];
