import React from "react";
import ParallaxSection from "../components/parallaxSection/ParallaxSection";
import "./ParallaxPage.css"; // Estilos específicos

const VistaReporte = () => {
  return (
    <div className="parallax-container">
      <ParallaxSection 
        id="section1" 
        bgImage="https://source.unsplash.com/random/1920x1080?nature"
      >
        <h1>Bienvenido al Efecto Parallax</h1>
        <p>Desliza hacia abajo</p>
      </ParallaxSection>

      <ParallaxSection 
        id="section2" 
        
      >
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Custom styles</h3>
              </div>
              
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-8">
                    <p class="mb-0">
                      For custom form validation messages, you’ll need to add the novalidate boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form
                      validation APIs in JavaScript.
                      <br/><br/>
                      When attempting to submit, you’ll see the<code>:invalid</code> and <code>:valid</code> styles applied to your form controls.
                    </p>
                  </div>
                </div>
                <hr/>
                <form class="needs-validation" novalidate="">
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label class="form-control-label" for="validationCustom01">First name</label>
                      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required=""/>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-control-label" for="validationCustom02">Last name</label>
                      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required=""/>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-control-label" for="validationCustomUsername">Username</label>
                      <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required=""/>
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label class="form-control-label" for="validationCustom03">City</label>
                      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required=""/>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="form-control-label" for="validationCustom04">State</label>
                      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required=""/>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="form-control-label" for="validationCustom05">Zip</label>
                      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required=""/>
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox mb-3">
                      <input class="custom-control-input" id="invalidCheck" type="checkbox" value="" required=""/>
                      <label class="custom-control-label" for="invalidCheck">Agree to terms and conditions</label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
              </div>
            </div>
      </ParallaxSection>

      <ParallaxSection 
        id="section5" 
      >
        <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Variable width content</h3>
            </div>
            <div class="card-body">
              <div class="row row-example justify-content-md-center">
                <div class="col col-lg-2">
                  <span>1 of 3</span>
                </div>
                <div class="col-md-auto">
                  <span>Variable width content</span>
                </div>
                <div class="col col-lg-2">
                  <span>3 of 3</span>
                </div>
              </div>
              <div class="row row-example">
                <div class="col">
                  <span>1 of 3</span>
                </div>
                <div class="col-md-auto">
                  <span>Variable width content</span>
                </div>
                <div class="col col-lg-2">
                  <span>3 of 3</span>
                </div>
              </div>
            </div>
          </div>
      </ParallaxSection>

      <ParallaxSection 
        id="section4" 
        bgImage="https://source.unsplash.com/random/1920x1080?space"
      >
        <h1>Fin del Viaje</h1>
        <p>¡Gracias por explorar!</p>
      </ParallaxSection>
    </div>
  );
};

export default VistaReporte;