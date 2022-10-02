import React, { useState } from 'react';
import './Registrations.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Registrations = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div class="wrapper wrapper--w680">
                <div class="card card-4">
                    <div class="card-body">
                        <h2 class="title">Registration Form</h2>
                        <form method="POST">
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">first name</label>
                                        <input className="input--style-4" type="text" name="first_name" />
                                    </div>

                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">last name</label>
                                        <input class="input--style-4" type="text" name="last_name" />
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">

                                <div class="col-2">
                                    <div class="input-group">

                                        <label type="date"
                                            class="label">Birthday</label>
                                        <div class="input-group-icon">


                                            <input htmlFor="datepicker" class="input--style-4 js-datepicker" type="text" name="birthday" />

                                            <DatePicker id='datepicker' selected={selectedDate}
                                                onChange={date => setSelectedDate(date)}

                                            />
                                            <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Gender</label>
                                        <div class="p-t-10">
                                            <label class="radio-container m-r-45">Male
                                                <input type="radio" checked="checked" name="gender" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container">Female
                                                <input type="radio" name="gender" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Email</label>
                                        <input class="input--style-4" type="email" name="email" />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Phone Number</label>
                                        <input class="input--style-4" type="text" name="phone" />
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <label class="label">Subject</label>
                                <div class="rs-select2 js-select-simple select--no-search label ms-4">

                                    <select className='label ' name="subject">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>Subject 1</option>
                                        <option>Subject 2</option>
                                        <option>Subject 3</option>
                                    </select>
                                    <div className="select-dropdown"></div>
                                </div>
                            </div>
                            <div className="p-t-15">
                                <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Registrations;