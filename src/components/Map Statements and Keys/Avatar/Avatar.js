import React from 'react'
import Filtered from './Filtered';
import UsersList from './UserList';
import randomUser from './Api';


class Avatar extends React.Component {

  state = {
    usersList: [],
    displayedUsersList: []
  }

  async componentDidMount() {
    const response = await randomUser.get('api', { params: { results: 150 } });
    const usersList = response.data.results.map(({ name, picture, gender }, index) => {
      return {
        id: index,
        firstName: name.first,
        lastName: name.last,
        pictureUrl: picture.large,
        gender: gender,
      };
    });
    this.setState({ usersList, displayedUsersList: usersList });
  }

  filterAvatars = (filter) => {
    if (filter.length === 0) {
      this.setState({ displayedUsersList: this.state.usersList }, () => console.log(this.state.displayedUsersList))
    } else {
      const filterRegex =` /${filter}, i`;
      const displayedUsersList = this.state.usersList.filter(user => filterRegex.test(user.firstName));
      this.setState({ displayedUsersList });
    }
  }

  render() {
    return (
      <div>
        <Filtered sendInputUpdate={this.filterAvatars} />
        <UsersList displayedUsersList={this.state.displayedUsersList} />
      </div>
    );
  }
}
export default Avatar;