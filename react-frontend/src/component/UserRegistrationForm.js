import React from 'react';

class UserRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                password: '',
                reEnterPassword: '',
                email: '',
                phoneNumber: '',
                address: '',
                zipCode: '',
            },
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    };

    render() {
        const { formData } = this.state;

        return (
            <form>
                {/* ... Other form elements */}
                <div className="mb-3 col-md-6">
                    User
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={this.handleChange}
                        autoFocus
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="reEnterPassword" className="form-label">
                        Re-Enter Password
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        id="reEnterPassword"
                        name="reEnterPassword"
                        value={formData.reEnterPassword}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={this.handleChange}
                        placeholder="john.doe@example.com"
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <div className="input-group input-group-merge">
                        <span className="input-group-text">GR (+30)</span>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="202 555 0111"
                            value={formData.phoneNumber}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="zipCode" className="form-label">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        name="zipCode"
                        placeholder="231465"
                        maxLength="6"
                        value={formData.zipCode}
                        onChange={this.handleChange}
                    />

                </div>
                {/* ... Repeat for other input fields */}
            </form>
        );
    }
}

export default UserRegistrationForm;
