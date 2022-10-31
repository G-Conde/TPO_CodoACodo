document.getElementById("id_header").innerHTML=`
<header>

<input type="checkbox" id="btn-menu">
<label for="btn-menu"><i class="fa-sharp fa-solid fa-bars"></i></label>
    
    <nav class="menu">
        <a href="index.html"> <div class="logo"> NBA Store | AR </div></a>
                    <ul class="menu-item">
                        <li><a href="index.html">Home</a></li>
                       
                        <li><a href="index.html#actualidad">Actualidad</a></li>
                        <li><a href="index.html#historiaNBA">Historia</a></li>
                        <li><a href="Articulos.html">Tienda</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
    </nav>

</header>`

document.getElementById("footer").innerHTML=`
<footer class="pie-pagina">

<div class="grupo-1">
    <div class="box">
        <figure><img src="img/NBA-logo-png.png" alt="NBA"></figure>
    </div>
        
    <div class="box">
        <h2>Donde nos encontramos</h2>
        <p> Av. Nicaragua N°5176 - CABA</p>        
        <div class="iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.0763570751092!2d-58.42941385294552!3d-34.58464382043537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f06aae67a3%3A0x7f4a12170a77fc2e!2sVite%20Porcellanato%20Showroom!5e0!3m2!1ses-419!2sar!4v1662506401987!5m2!1ses-419!2sar" width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
          
    <div class="box">
        <h2>Seguinos</h2>
            <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
            </div>
    </div>
</div>
                
<div class="grupo-2">
    <small>&copy; 2022 <strong>NBA Store | Argentina</strong>-Todos los derechos reservados</small>
</div>

</footer>`