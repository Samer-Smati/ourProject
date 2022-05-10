import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="container">
            <div class="row g-0 mt-5 mb-5 height-100">
                <div class="col-md-6">
                    <div class="bg-dark p-4 h-100 sidebar">
                        <div class="signin-btn w-100 mt-2"><Link to="/Register" ><button class="btn btn-outline-danger btn-block">Signin</button> </Link></div>
                        <ul class="chart-design">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white p-4 h-100">
                        <div class="p-3 d-flex justify-content-center flex-column align-items-center">
                            <ul class="social-list mt-3">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-google"></i></li>
                                <li><i class="fa fa-linkedin"></i></li>
                            </ul>
                            <div class="form-data"> <label>Email</label> <input type="text" class="form-control w-100" required /> </div>
                            <div class="form-data"> <label>Password</label> <input type="text" class="form-control w-100" required /> </div>
                            <div class="d-flex justify-content-between w-100 align-items-center">
                                <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> Remember me </label>
                                </div>
                                <a class="text-decoration-none forgot-text" href="#">Register</a>
                                <a class="text-decoration-none forgot-text" href="#">Forgot password?</a>
                            </div>
                            <div class="signin-btn w-100 mt-2"> <button class="btn btn-danger btn-block">Signin</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login