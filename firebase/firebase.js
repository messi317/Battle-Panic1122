<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Battle Panic</title>

    <script src="ruffle/ruffle.js"></script>

    <script type="module" src="firebase/firebase.js"></script>
    <script type="module" src="firebase/auth.js"></script>
    <script type="module" src="firebase/save.js"></script>
</head>

<body>

    <embed
        src="battlepanic.swf"
        width="1200"
        height="900"
        allowscriptaccess="always">

    <script type="module">
        import { loginWithGoogle } from "./firebase/auth.js";

        window.googleLogin = function () {
            loginWithGoogle();
        };
    </script>

</body>
</html>
