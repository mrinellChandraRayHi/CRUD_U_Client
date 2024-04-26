import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData();
    console.log(loadedUser);
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const updateUser={name, email};
        console.log(updateUser);
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated successfully')
            }
        })
    }
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;