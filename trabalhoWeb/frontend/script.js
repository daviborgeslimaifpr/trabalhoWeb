// URL DO BACKEND NO CODESPACE
const API = "https://glowing-spork-6974qg6qvxww2jw5-3000.app.github.dev";

// Mostrar telas
function showRegister() {
    registerBox.style.display = "block";
    loginBox.style.display = "none";
}

function showLogin() {
    registerBox.style.display = "none";
    loginBox.style.display = "block";
}

// ---------------- LOGIN ----------------
async function login() {
    const email = log_email.value;
    const password = log_senha.value;

    try {
        const res = await fetch(API + "/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error);
            return;
        }

        localStorage.setItem("token", data.token);
        carregarDashboard();

    } catch (error) {
        alert("Erro ao conectar ao servidor!");
        console.error(error);
    }
}

// ---------------- CADASTRO ----------------
async function register() {
    const name = reg_nome.value;
    const email = reg_email.value;
    const password = reg_senha.value;
    const phone = reg_tel.value;

    try {
        const res = await fetch(API + "/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, email, password, phone })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error);
            return;
        }

        alert("Conta criada com sucesso!");
        showLogin();

    } catch (error) {
        alert("Erro ao conectar ao servidor!");
        console.error(error);
    }
}

// ---------------- DASHBOARD / LISTAR ----------------
async function carregarDashboard() {
    loginBox.style.display = "none";
    registerBox.style.display = "none";
    dashboard.style.display = "block";

    try {
        const res = await fetch(API + "/users");

        const users = await res.json();
        userTable.innerHTML = "";

        users.forEach(u => {
            userTable.innerHTML += `
                <tr>
                    <td>${u.id}</td>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td>${u.phone}</td>
                    <td>${u.status}</td>
                </tr>
            `;
        });

    } catch (error) {
        alert("Erro ao carregar usuários!");
        console.error(error);
    }
}

// ---------------- LOGOUT ----------------
function logout() {
    localStorage.removeItem("token");
    dashboard.style.display = "none";
    showLogin();
}
