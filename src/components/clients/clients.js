import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {compose} from 'redux';
// import { connect} from 'react-redux';
// import {firestoreConnect} from 'react-redux-firebase';
// import PropTypes from 'prop-types'



class Clients extends Component {
    render() {
        const clients = [
            {
                id: 1,
                firstName: 'Emeka',
                lastName: 'Obioha',
                email: 'emeka@email.com',
                phone: '7830-332-4456',
                balance: '45.18'
            },
            {
                id: 2,
                firstName: 'Tony',
                lastName: 'Agu',
                email: 'tagu@email.com',
                phone: '7835-102-4173',
                balance: '25.35'
            },
            {
                id: 3,
                firstName: 'Uche',
                lastName: 'Aronu',
                email: 'aronuuche@email.com',
                phone: '7835-903-4153',
                balance: '12.98'
            }
        ]

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{' '} <i className="fas fa-users"></i> Users {' '}</h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => {
                                return (
                                    <tr key={client.id}>
                                        <td>{client.firstName} {client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>&#8358;{parseFloat(client.balance).toFixed(2)}</td>
                                        <td>
                                            <Link to={`/client/${client.id}`} className="btn btn-info btn-sm">
                                                <i className="fas fa-arrow-circle-right"></i> Details
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (<h3>Loading...</h3>)
        }
    }
}


export default Clients