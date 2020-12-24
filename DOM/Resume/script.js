
// FUnction for creating element using class and assigning id

function createElement(elementName,className='',id=''){
    var elem = document.createElement(elementName)
    elem.setAttribute('class',className)
    elem.setAttribute('id',id)
    return elem;
}

/*Create Basic Root*/
var root=createElement('div','div0','div0')
document.body.append(root)
// Add Banner in Grey

var banner = createElement('div','div1','div1')
root.append(banner)
//Add circle  for photo

var img = createElement('img','circle','img')
img.setAttribute('src','dummypic.jpg')
banner.append(img)

// Name
var mname = createElement('div','div2','name')
root.append(mname)
mname.innerHTML= "Anu Pama"

// Dark Background
var dark = createElement('div','dark','dk')
root.append(dark)

// Address
var add = createElement('div','add','add')
root.append(add)
add.innerHTML="007,Highest Peak,Southern Hemisphere,Milky Way|+1 1234567890 |unrealcontactinformation@imaginaryemail.com<br><hr> "

// Section Left
var sectlt = createElement('section','section','sectlt')
root.append(sectlt)

// Profile
var profile = createElement('div','','profile')
sectlt.append(profile)

var icon1 = createElement('i','fa fa-user fa-3x circle-icon ','i1')
var protitle = createElement('span','head','pr')
profile.append(icon1,protitle)
protitle.innerHTML="  Profile<br>"
// Fill Profile
var prodata = createElement('div','textfont','prp')
prodata.innerHTML ="Motivated result-oriented smart working professional.<br>Strong analytical skills and ability to resolve issues.<br>Excellent communication and interpersonal skills<br><br>"
profile.append(prodata);

// Skills
var icon2 = createElement('i','fa fa-flask fa-3x circle-icon','i2')

//Add Input Ranges for technical Skills --Add technical Skills
var skills = createElement('span','head','sk')
skills.innerHTML="  Skills<br>"
profile.append(icon2,skills)


var tech = createElement('span','head1','tk')
tech.innerHTML="Technical Skills<br>"
profile.append(tech)


var rjs= createElement('input','slide','r1')
rjs.setAttribute('type','range')

tech.append(rjs)

var JS = createElement('span','textfont','js')
JS.innerHTML="JavaScript<br>"
tech.append(JS)

var rcs= createElement('input','slide','r2')
rcs.setAttribute('type','range')
tech.append(rcs)


var CSS = createElement('span','textfont','css')
CSS.innerHTML="CSS<br>"
tech.append(CSS)

//Add Input Ranges for Functional Skills --Add Functional Skills

var func = createElement('span','head1','func')
func.innerHTML="Functional Skills<br>"
profile.append(func)

var rm= createElement('input','slide','r3')
rm.setAttribute('type','range')
func.append(rm)


var pm = createElement('span','textfont','pm')
pm.innerHTML="Risk Management<br>"
func.append(pm)

var rpm= createElement('input','slide','r3')
rpm.setAttribute('type','range')
func.append(rpm)


var pm = createElement('span','textfont','pm')
pm.innerHTML="Project Management<br><br><br>"
func.append(pm)

// Work Experience

var icon3 = createElement('i','fa fa-briefcase fa-3x circle-icon','i3')
var wk = createElement('span','head','wk')
wk.innerHTML="  Work Experience<br>"
profile.append(icon3,wk)

var wkdata = createElement('span','head1','wkdata')
wkdata.innerHTML ="There is only one thing that a philosopher can be relied <br>upon to do and that is to contradict other philosophers.<br>William James.<br>"

profile.append(wkdata);

// Create Right Section
var sectrt = createElement('aside','aside','sectrt')
root.append(sectrt)

var icon4 = createElement('i','fa fa-briefcase fa-3x circle-icon','i4')
var wk2 = createElement('span','head','wk2')
sectrt.append(icon4,wk2)
// Work Experience
wk2.innerHTML="    Work Experience<br>"
var wk2data = createElement('span','head1','wk2data')
wk2data.innerHTML ="Aesthetics<br>Ethics<br>Metaphysics<br><br><br>"

sectrt.append(wk2data)

// Education

var icon5 = createElement('i','fa fa-graduation-cap fa-3x circle-icon','i5')
var ed = createElement('span','head','ed')

ed.innerHTML="    Education<br>"
sectrt.append(icon5,ed)
var eddata = createElement('span','head1','eddata')
eddata.innerHTML ="B.E |Distinction<br>P.U.C|Distinction<br>S.S.L.C|Distinction<br><br><br>"
sectrt.append(eddata)


// Other Experience
var icon6 = createElement('i','fa fa-briefcase fa-3x circle-icon','i6')
var otwk = createElement('span','head','otwk')
sectrt.append(icon6,otwk)
otwk.innerHTML="    Other Experience<br>"

var otdata = createElement('span','head1','otdata')
otdata.innerHTML ="Some are born great,some achieve greatness and some have<br>greatness thrust upon them. William Shakespeare<br><br>"
sectrt.append(otdata)




