<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
<?php
  $videoScripts = '';
  include("header.php");
  include($_SERVER["DOCUMENT_ROOT"] . str_replace(end(explode("/", $_SERVER["PHP_SELF"])), "", $_SERVER["PHP_SELF"]) . "content.php");
  include("footer.php");
?>