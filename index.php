<?php
//DB接続
$server="localhost";
$username="root";
$dbname="shop";

$mysql=new mysqli($server,$username,"",$dbname);

if($mysql->connect_error){
    echo $mysql->connect_error;
    exit();
}
else{
    $mysql->set_charset("utf-8");
}

//insert
if(isset($_POST["insert"]))
{
    $ins_name=$_POST["ins_name"];
            $ins_price=$_POST["ins_price"];
            
            $insert_sql="INSERT INTO product(NAME,PRICE) VALUES('$ins_name','$ins_price')";
            
            $mysql->query($insert_sql);
}

//update
if(isset($_POST['update'])){
    $up_name=$_POST['name'];
    $up_price=$_POST['price'];
    $kakushi_number=$_POST['kakushi'];
    
    $update_sql="UPDATE product SET NAME='$up_name',PRICE='$up_price' WHERE ID='$kakushi_number'";
    
    $mysql->query($update_sql);
}

//delete
if(isset($_POST['delete'])){
    $kakushi_number_delete=$_POST['kakushi'];
    
    $delete_sql="DELETE FROM product WHERE ID='$kakushi_number_delete'";
    
    $mysql->query($delete_sql);
}

$sql="SELECT * FROM product";

$result=$mysql->query($sql);

if(!$result){
    echo $mysql->error;
    exit();
}

$row_count=$result->num_rows;

while($row=$result->fetch_array(MYSQLI_ASSOC)){
    $rows[]=$row;
}

$result->free();

$mysql->close();
?>


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>データベース</title>

    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.5.1.min.js"></script>
    <script src="style_script.js"></script>

</head>

<body style="text-align:center">

    <h1><?php if(isset($_POST['update'])){
    echo '更新ボタンが押されたよ';
}
        elseif(isset($_POST["delete"]))
        {
            echo $_POST["name"].'が削除されました';
        }
        
        elseif(isset($_POST["insert"]))
        {
            echo "データが追加されました";
        }
        else{
            echo 'データベース';
        }
        ?></h1>

    <table border="1" align="center">
        <?php 
    foreach($rows as $row){
    ?>
        <form action="index.php" method="post">
            <tr>
                <input type="hidden" name="kakushi" value="<?php echo $row["ID"]?>">
                <td><?php echo $row["ID"];?></td>
                <td><input type="text" name="name" value="<?php echo $row['NAME']; ?>"></td>
                <td><input type="text" name="price" value="<?php echo $row['PRICE'];?>"></td>
                <td><button type="submit" name="update">更新</button></td>
                <td><button type="submit" name="delete">削除</button></td>
            </tr>
        </form>
        <?php 
    } ?>
    </table>

    <table border="1" align="center">
        <form action="index.php" method="post">
            <tr>
                <td><input type="text" name="ins_name"></td>
                <td><input type="text" name="ins_price"></td>
                <td><button type="submit" name="insert">追加</button></td>
            </tr>
        </form>
    </table>


    <!-- partial:index.partial.html -->
    <div class="scene">
    </div>

    <!-- partial -->
    <script src="./script.js"></script>

</body>

</html>
