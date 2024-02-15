// ================================================== back to top =====================================================
document.writeln(" <div class=\"backTop\" id=\"backTop\">⇧</div>");
document.writeln("    <script>");
document.writeln("        /* 需求：当页面滚动大于300像素，就显示回到顶部按钮 */");
document.writeln("        // 获取回到顶部元素");
document.writeln("        const backTop = document.querySelector(\'#backTop\')");
document.writeln("        // L2 事件监听");
document.writeln("        // 给页面添加 滚动事件");
document.writeln("        window.addEventListener(\'scroll\', function () {");
document.writeln("            // 检测页面滚动的头部距离属性");
document.writeln("            const n = document.documentElement.scrollTop");
document.writeln("            backTop.style.opacity = n >= 300 ? 1 : 0");
document.writeln("        })");
document.writeln("        // 需求：点击返回按钮，页面会返回顶部");
document.writeln("        // 给回到顶部元素添加 点击事件");
document.writeln("        backTop.addEventListener(\'click\', function () {");
document.writeln("            document.documentElement.scrollTop = 0");
document.writeln("        })");
document.writeln("    </script>");


// ================================================= progess bar ======================================================
document.writeln("    <div class=\"read_pro\">");
document.writeln("        <div class=\"read_pro_inner\" id=\"read_pro_inner\"></div>");
document.writeln("    </div>");
document.writeln("    <script>");
document.writeln("        document.addEventListener(\'scroll\', function (e) {");
document.writeln("            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 已经读过被卷起来的文档部分");
document.writeln("            var scrollHeight = document.documentElement.scrollHeight // 文档总高度");
document.writeln("            var clientHeight = document.documentElement.clientHeight // 窗口可视高度");
document.writeln("            document.getElementById(\'read_pro_inner\').style.width = +(scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100 + \'%\'");
document.writeln("        })");
document.writeln("    </script>");


// ===================================================== footer ========================================================
document.writeln("<div id=\"footer\">");
document.writeln("        <p><br>网页信息解释权&nbsp;&copy家长教育焦虑研究小组 <br>联系我们：202111039214@mail.bnu.edu.cn</p>");
document.writeln("    </div>");