const linksSocialMedia = {
  github: 'smarcelo-code',
  linkedin: 'www.linkedin.com/in/sandro-marcelorr',
  facebook: 'sandro marcelo',
  instagram: 'sandro',
  twitter: 'sandro'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

// function getGitHubUserRepos() {
//   const RepoUrl = `https://api.github.com/users/${linksSocialMedia.github}/repos/`

//   fetch(RepoUrl)
//     .then(response => response.json())
//     .then(data => alert(data.name))
// }

getGitHubProfileInfos()
