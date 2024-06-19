window.onload = () => {
    // Create the side navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-side';
    navbar.innerHTML = `
        <style>
            .navbar-side {
                position: fixed;
                top: 0;
                left: 0;
                width: 200px;
                height: 100%;
                background-color: #343a40;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
            }
            .nav-item {
                width: 100%;
                text-align: center;
            }
            .nav-item a {
                text-decoration: none;
                width: 100%;
                background-color: transparent;
                border: none;
                color: white;
                padding: 15px 0;
                font-size: 18px;
                display: block;
            }
            .nav-item a:hover {
                background-color: #495057;
            }
            .content {
                margin-left: 220px; /* Adjust this margin to match the width of the navbar */
                padding: 20px;
            }
        </style>
        <div class="container-fluid">
            <div class="row w-100">
                <div class="col-12 nav-item">
                    <a href='insertForm.html'>Insert</a>
                </div>
                <div class="col-12 nav-item">
                    <a href='http://localhost:3001/select'>View</a>
                </div>
                <div class="col-12 nav-item">
                    <a href='updateForm.html'>Update</a>
                </div>
                <div class="col-12 nav-item">
                    <a href='deleteForm.html'>Delete</a>
                </div>
            </div>
        </div>
    `;

    // Append the navbar to the body
    document.body.appendChild(navbar);

    // Wrap the existing content in a div with class 'content'
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    while (document.body.firstChild !== navbar) {
        contentDiv.appendChild(document.body.firstChild);
    }
    document.body.appendChild(contentDiv);
};
