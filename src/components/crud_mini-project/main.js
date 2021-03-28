import React, { Component } from "react";
import axios from "axios";
import Appdata from "./update";

const api = axios.create({
    baseURL: `https://605c955a6d85de00170da8f4.mockapi.io/items`
})


export default class Main extends Component {
    state = {
        courses: []
     
    }
    
    constructor() {
        super();
        this.getCourses();
        

    }


    getCourses = async () => {
        try {
            let data = await api.get('/').then(({ data }) =>
                data);
            this.setState({ courses: data })
        } catch (err) {
            console.log(err)
        }
    }

    createCourse = async () => {
        let res = await api.post('/')
            .catch(err => console.log(err))
        console.log(res)
        this.getCourses();
    }

    deleteCourse = async (id) => {
        let data = await api.delete(`/${id}`)
        this.getCourses();

    }
    updateCourse = async (id, val) => {
        let data = await api.patch(`/${id}`, { title: val })

        this.setState({
            data: data
          
        });
        this.getCourses();
    }



    render() {
        return (
            <div>

                <div className='container'>
                    <h1>Online Courses</h1>

                    <button onClick={this.createCourse}>Add New Course</button>



                    {this.state.courses.map(course => <table key={course.id}>
                        <tr>
                            <th>Teacher</th>
                            <th>Course Subject</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{course.Teacher}</td>
                            <td> {course.title}</td>
                            <td>{course.price}</td>
                            <td> <button onClick={() => this.deleteCourse(course.id)}>Delete Course</button></td>
                            <td> <button onClick={() => this.updateCourse(course.id, `${course.Teacher}`)}>Update Course</button></td>
                        </tr>

                    </table>)}
                    {/* <div>
                     <Appdata/>
                    </div> */}

                </div>


            </div>
        )
    }
}
