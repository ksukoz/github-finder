class GitHub {
  constructor() {
    this.client_id = '65e20bc6f13644092751';
    this.client_secret = '7d0e2ea54e61935cec799ea7546f05968223e273';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}