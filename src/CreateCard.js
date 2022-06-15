export default function CreateCard({ formData, setFormData }) {

    console.log(formData);

    const handleChange = e => {
        let isChecked = e.target.checked;
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.value]: isChecked });
    }

    return (
        <div>
            <h1>Create your DevCard</h1>
            <input type="text" placeholder="Your Full Name" onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
            <input type="text" placeholder="About Me" onChange={e => setFormData({ ...formData, aboutMe: e.target.value })}/>

            <fieldset>
                <legend>Technologies you Know:</legend>
                <label><input type="checkbox" value="HTML" onChange={handleChange}/>HTML</label>
                <label><input type="checkbox" value="CSS" onChange={handleChange}/>CSS</label>
                <label><input type="checkbox" value="JS" onChange={handleChange}/>JS</label>
                <label><input type="checkbox" value="Git" onChange={handleChange}/>Git</label>
                <label><input type="checkbox" value="React" onChange={handleChange}/>React</label>
                <label><input type="checkbox" value="NodeJS" onChange={handleChange}/>Node.js</label>
            </fieldset>

            <input type="text" placeholder="Github URL" onChange={e => setFormData({ ...formData, githubURL: e.target.value })}/>
            <input type="text" placeholder="Twitter URL" onChange={e => setFormData({ ...formData, twitterURL: e.target.value })}/>
            <input type="text" placeholder="Favourite Books (Separate by comma)" onChange={e => setFormData({ ...formData, favouriteBooks: e.target.value })}/>
            <input type="text" placeholder="Favourite Artists (Separate by comma)" onChange={e => setFormData({ ...formData, favouriteArtists: e.target.value })}/>
            <button>Create Site</button>
        </div>
    );
}
  