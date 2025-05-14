
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/maiawnicolas/portifolio/refs/heads/main/js-developer-portfolio-main/data/profile.json?token=GHSAT0AAAAAADD4NOSACLFCSQ72CWYGTYNS2BE3O7A';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
