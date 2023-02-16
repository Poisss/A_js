<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    <h1>Задача 1</h1>
        <?php
            $ar=array();
            $ch1=0;
            $ch2=0;
            $ch3=0;
            $ch4=0;
            for ($i=0;$i++<20;){
                $ar[$i]=random_int(0,100);

                echo "$ar[$i] <br>";
                if ($ar[$i]>$ch1){
                    $ch1=$ar[$i];
                }
                elseif ($ar[$i]>$ch2){
                    $ch2=$ar[$i];
                }
                elseif ($ar[$i]>$ch3){
                    $ch3=$ar[$i];
                }
            }
        echo "Сумма ",$ch1.$ch2.$ch3;
            echo "Сумма ",$ch1+$ch2+$ch3;
        ?>
        <h1>Задача 2</h1>
        <?php
        $kol=0;
        $ar=array();
        for ($i=0;$i++<10;){
            $ar[$i]=random_int(0,100);
            if($ar[$i]<50){
                $kol+=1;
            }
            echo "$ar[$i] <br>";
        }
        echo "$kol <br>";
        if ($kol%4===0){
            echo "верно";
        }
        else{
            echo "неверно";
        }
        ?>

    </body>
</html>