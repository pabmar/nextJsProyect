import Link from "next/link"


const Navigations = () =>{
    return <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <Link href="/">
          <a class="navbar-brand">Home</a>
        </Link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
          <li class="nav-item">
              <Link href="/about">
              <a class="nav-link">About</a>
              </Link>
         
          </li>
          <li class="nav-item">
          <Link href="/services">
              <a class="nav-link">Services</a>
              </Link>
          
          </li>
        </ul>
      </div>
    </div>
  </nav>
         
}

export default Navigations