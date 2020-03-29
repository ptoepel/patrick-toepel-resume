<?php 

if($_POST['lazy'] ==""){



$name = $_POST['name'];
$service= $_POST['service'];
$email = $_POST['email'];
$message = $_POST['message'];




if(empty($name) ||  empty($email) || empty($message)){
    header("Location:../resume/index.php?contact=empty#contact");
    exit();
}else{
        if(!preg_match("/^[a-z ,.'-]+$/i",$name)){
            header("Location:../resume/index.php?contact=char&name=".$name."");
 
        }
        else{
            if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
                header("Location:../resume/index.php?contact=invalidemail&email=".$email."");
                exit();
            }else{

            $mailTo = "patrick.toepel@gmail.com";
            $headers = "From: " .$email;
            $txt = "You have recieved an email from ".$name." .\n\n".$message;
        
            mail($mailTo,$subject,$txt,$headers);
            header('Location:../resume/index.php?contact=success#contact');
            }
        }
    }
}
else
{

    header("Location:../resume/index.php?contact=error#contact");

}
?>