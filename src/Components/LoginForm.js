import React from 'react'
import '../SlidingPoster.css'
import '../Login.css'

export default function LoginForm() {
    return (
        <div>
            <div class="login-form-container">
                <i class="fas fa-times" id= 'form-close'></i>
                <form action="https://sheetdb.io/api/v1/wwtm72iogy4tz" method="POST" id="sheetdb-form">
                    <h3>Attendance</h3>
                    <input type="text" name="data[Name]" class="box" placeholder="Enter Your Full name" required />
                    <input type="text" name="data[Class and Section]" class="box" placeholder="Enter Your Class and Section" required />
                    <input type="number" name="data[Mobile No.]" class="box" placeholder="Enter Your Mobile No." required />
                    <input type="email" name="data[Email]" class="box" placeholder="Enter Your email" required />
                    <input type="date" name="data[Date]" class= 'box' placeholder="enter date" required />
                    <input type="time" name="data[Timestamp]" class= 'box' placeholder="enter time" required />
                    <select class="box" name="data[Attendance]" required>
                        <option value="Attendance Status">Attendance Status</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                    </select>
                    <input type="submit" value='Submit Now' class='btn' />
                </form>
            </div>
        </div>
    )
}
