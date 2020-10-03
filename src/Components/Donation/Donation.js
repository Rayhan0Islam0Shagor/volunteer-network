import React from 'react';
import Header from '../Header/Header';

const Donation = () => {
    return (
        <div>
            <Header />
            <div className="container w-50 mt-5">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" placeholder="Email or Username" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" placeholder="Password" class="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Mobile Number</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Mobile Number" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" placeholder="Your living city" class="form-control" id="inputCity" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputZip">Amount</label>
                            <input type="text" placeholder="Amount of taka..." class="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Donate</button>
                </form>
                <div className="text-danger text-center mt-3">
                    <small >⚡️This Section is under Construction⚡️</small>
                </div>
            </div>
        </div>
    );
};

export default Donation;