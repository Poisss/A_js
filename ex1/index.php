<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="index.css" type="text/css">
    </head>
    <body>
        <div class="pp">
            <h2>Задача 1</h2>
            <?php
                for($i=0;$i++<30;){
                    if ($i%2===0){
                        echo "Число кратно двум $i <br>";
                    }
                }
            ?>
            <h2>Задача 2</h2>
            <?php
                for($i=0;$i++<50;){
                    if ($i%3===0 and $i%5===0){
                        echo "Число кратно трём и пяти <strong><i>$i</i></strong> <br>";
                    }
                    elseif ($i%3===0){
                        echo "Число кратно кратно трём <i>$i</i> <br>";
                    }
                    else{
                        echo "$i <br>";
                    }

                }
            ?>
            <h2>Задача 5</h2>
            <?php
                for($i=4;$i++<13;){
                    echo "$i <br>";
                }
            ?>
            <h2>Задача 3</h2>
            <?php
                $sum=0;
                $q1=1;
                $q2=1;
                $i=0;
                while($sum<10){
                    $sum+=$q1/$q2;
                    $q1+=3;
                    $q2+=1;
                    $i+=1;
                }
                echo"Минимальное количество $i";
            ?>
            <h2>Задача 6</h2>
            <?php
                $i=0;
                $num=1000;
                while($num>50){
                    $num/=2;
                    $i+=1;
                }
                echo"Минимальное количество $i<br>";
                $kol=0;
                for($i=1000;$i>50;$i/=2){
                    $kol+=1;
                }
                echo"Минимальное количество $kol";
            ?>
        </div>
    </body>
</html>
