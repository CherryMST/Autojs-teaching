/*
*@鸿星Q52666830
*@更多基础不会的问本人喽;
*@整理不易纯手打 完成时间:2020.3.7 11.36
*
*
*
变量的作用  主要用于对数据的读取和存入
声明变量和赋值
var 变量名;    未赋值
var 变量名=值   赋值
*
*
*
*
*代码的规范写法
*js里声明变量 两种 var 和 let
*代码每行结尾时都应该带上分号来以示结尾  ;
*js中变量名对字母大小写很明显 var num=1   var NUm=1;
js中字符串可以用双引号""   也可以用单引号''
*
*
*
*声明变量不能用JavaScript内置的关键字
* break case catch continue const default delete do else finally for function if
* in instanceof new return switch this  throw try typeof var void let while with 
*
*
*变量名的注意事项
*1.变量名符号不能做为首位，不能以数字为首位，通常英文做为首位
2.变量名一般是小写
3.变量名如果是多个单词，推荐用驼峰命名法  
*
*
*
*调试输出
*输出主要方便看自己写的程序对不对，方便检验代码
*consloe.log()   输出打引到日志
*console.error()   
*consloe.info()
*console.warn()
*
*
*
*
*
*
*数组的作用  主要用于操作多个数据的存储和读取
*声明数组的规则和声明变量的规则一样
*var a=[] 空数组
*a.push()  ----向名为a的数组存储数据
*var a=["1","2","3"]
*数组a有3份数据，取数组的值用取下标法则即可
* var b=a[0] consloe.log(b) 取出的值b为1   编程计数都是从0开始
*
*
*
*
*
*split    大法---数据分割
*
*var a="卧槽无情鸿星666"
*a.split("无情")[0]     取出的值为   卧槽    0取分割的前面 1为取分割的后面
*a.split("无情")[1]  取出的值为     鸿星666     同上
*常用于分割字符取值
*
*
*
*
*
* if elseif else  判断法则
if(){           ------小括号里为条件，如果条件满足则会运行{}里的代码体
    
} else if(){    -------如果上面的不满足，而是满足了这个条件则会运行这个{}里的代码体
        
} else {      --------当上面条件都不满足时则运行这个{}里的代码体
            
}
*
*
*判断例子  如果鸿星是1分，给他10 Q币 如果60分给他99  Q币   如果88分，给他  128 Q币  如果100满分给他188 Q币,如果以上都没有满足条件，则奖励888 Q币
var 鸿星=""    ---分数暂时没有填写
if(鸿星==1){       
    log("10 Q币")
} else if(鸿星==60){
    log("99 Q币")
} else if(鸿星==88){
    log("128 Q币")
} else if(鸿星==100){
    log("188 Q币")
} else  {
    log("888 Q币")
}
*
*
*
*
*循环 for 和do while还有个while
*一般循环常用for
*for循环例子   打印5次鸿星666
for(let a=1;a<=5;a++){     -----第一个a=1，声明计数的变量，第二个a<=5，用来指定次数，第三个a++用来更新表达式
    log("鸿星666")     ------{这个的里面为循环体}
    }
*while例子
*while(条件){循环体}
*条件为布尔值 true和false 1和0
*条件也可以为指定次数  声明变量a  a<=次数
*var a=1
*while(a<=10){
    
    循环体
    
    }
*
*
*
*
* do while
*do{
    循环体
    } while(条件)
*
*do while循环最少执行一次，因为他先执行循环体才进行判断的条件
*
*
*
*
*
*
*函数学习 函数两大类   不传参函数和传参函数   参=参数
*function a(){    ---这个函数名字就叫a()---function用来声明a函数   a的()里为空，这个就是不传参函数
    return  true       ------调用a()  这个函数，就会返回true    不传参的函数
    
    }
*
*
*
*传参函数学习
function a(b){   -------这个函数名字就叫a(b)  b为必填参数  
    return b   -----比如说调用a("666")  返回值为666   调用a("卧槽无情") 返回值为卧槽无情
    }
*
*
*
*多个参数的函数
*function y(a,b,c){    -----这个函数名字为y(a,b,c) a和b和c为必填参数
return a+b+c             返回值为你填的三个参数的之和，如果不是数字类型的数据，比如y(a,jjj,huh)   则会返回ajjjhuh
}
*
*
*
*
* 关于函数的调用可以声明变量来调用 var t     t=a() 则为t赋值了a()这个函数 t=a(b) 则为变量t赋值了a(b)这个函数
*
*
*
*
