function changeName() {
  document.getElementById('userName').textContent = "Snow"
}

changeName()

const linksSocialMedia ={
  youtube: "UCnmW-GaxTIe2Y1Zup5etHFQ",
  facebook: "snowedz",
  instagram: "snowedz",
  twitter: "tylensnow",
  github: "snowedz"
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialLinks()

function getGitHubData() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}` 

  fetch(url)
    .then(response => response.json())
    .then(data => { 
      userName.textContent = data.name
      userBio.textContent = data.bio
      userUrl.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
  
} 
getGitHubData()
