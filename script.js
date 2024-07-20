document.addEventListener("DOMContentLoaded", function() {
    const hackerTextElement = document.getElementById("hacker-text");
    const hackerText = `
    Initializing sequence...
    Connecting to the server...
    Access granted.
    Downloading data...

    [root@localhost ~]# ls -la
    total 64
    drwxr-xr-x  8 root root  4096 Jul 20 10:21 .
    drwxr-xr-x 18 root root  4096 Jul 20 10:21 ..
    -rw-------  1 root root  4096 Jul 20 10:21 .bash_history
    -rw-r--r--  1 root root   220 Jul 20 10:21 .bash_logout
    -rw-r--r--  1 root root  3771 Jul 20 10:21 .bashrc
    drwx------  2 root root  4096 Jul 20 10:21 .cache
    drwx------  3 root root  4096 Jul 20 10:21 .gnupg
    -rw-r--r--  1 root root   807 Jul 20 10:21 .profile
    drwxr-xr-x  2 root root  4096 Jul 20 10:21 .ssh
    -rw-r--r--  1 root root     0 Jul 20 10:21 .sudo_as_admin_successful
    drwxr-xr-x  2 root root  4096 Jul 20 10:21 bin
    drwxr-xr-x  2 root root  4096 Jul 20 10:21 lib
    drwxr-xr-x  3 root root  4096 Jul 20 10:21 share

    [root@localhost ~]# cat /etc/passwd
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    bin:x:2:2:bin:/bin:/usr/sbin/nologin
    sys:x:3:3:sys:/dev:/usr/sbin/nologin
    `;

    let index = 0;

    function typeEffect() {
        if (index < hackerText.length) {
            hackerTextElement.textContent += hackerText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});
