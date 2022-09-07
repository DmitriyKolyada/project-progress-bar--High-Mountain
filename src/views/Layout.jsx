const React = require('react');

function Layout(props) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
                <script defer src="js/application.js" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
                <link rel="stylesheet" href="stylesheets/style.css" />
                <title>{props.title}</title>
            </head>
            <body>
                <div id="root">
                    <header>
                        <div className="logo-container">
                            <img className="logo" src="/img/mountain.png" alt="logo" />
                            <h1>Высокая гора</h1>
                        </div>

                        {/* <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/form">Form</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/tasks">Tasks</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">Profile</a>
                    </li>

                    {props.username  
                      ? (                     
                        <li className="nav-item">
                          <a className="nav-link" href="/user/logout">Logout</a>
                        </li>
                      ) : (                      
                        <>
                          <li className="nav-item">
                            <a className="nav-link" href="/user/signin">Log In</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/user/signup">Register</a>
                          </li>
                        </>
                      )}

                    {JSON.stringify(props.admin)}
                  </ul>
                </div>
              </div>
            </nav> */}
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-center">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

module.exports = Layout;