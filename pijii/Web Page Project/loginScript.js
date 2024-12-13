let currentIndex = 0;

function slideImages() {
    const slides = document.querySelector('.slides');
    const totalImages = slides.children.length;
    currentIndex = (currentIndex + 1) % totalImages;
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(slideImages, 5000); 



function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value;
    const pass = passwordInput.value;
    const element = document.getElementById('login');

    const Emails = ['peejaygalang145@gmail.com', 'Admin123', 'Marinellefilomeno@gmail.com', 'elajacob@gmail.com',
        'bagsic.kerby@gmail.com', 'ralphchristiann@gmail.com', 'ClarenzSerrano@gmail.com', 'AaronDejesus@gmail.com', 
        'Deguzmanda@gmail.com', 'Kemzbalilo@gmail.com', 'DeJesusAizen@gmail.com'
    ];
    const Passwords = ['5672943810', 'Admin1234', 'iska20051212', '01020319erin', '031699kerby', 
        'Zekken001', '09168429305Renz', 'Sakiaa0011', 'Llerad051806', 'K3M28A1!1o', 'akotosinatoy09'
    ];

    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";
    emailInput.placeholder = "Enter your email";
    passwordInput.placeholder = "Enter your password";

    for(let i=0; i!=Emails.length; i++) {
        if (email === Emails[i] && pass === Passwords[i]) {
            window.location = "home.html";
        } else {
            emailInput.style.borderColor = "red";
            passwordInput.style.borderColor = "red";

            emailInput.value = ""; 
            passwordInput.value = ""; 
            emailInput.placeholder = "Invalid Email";
            passwordInput.placeholder = "Invalid Password";

            let existingMessage = document.getElementById('error-message');
            if (!existingMessage) {
                const para = document.createElement("p");
                para.id = "error-message";
                para.style.color = "red";
                para.style.marginLeft = "8.5%";
                para.style.marginTop = "4px";
                const node = document.createTextNode("Invalid Email or Password");
                para.appendChild(node);

                const child = document.getElementById("p1");
                element.insertBefore(para, child);
            }
        }
    }
}

function showpassword() {
    const pass = document.getElementById('password');;

    if (pass.type === 'password') {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
