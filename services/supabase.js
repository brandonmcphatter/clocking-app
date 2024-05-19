import {createClient} from '@supabase/supabase-js';
import {redirect} from "next/navigation";

const supabaseUrl = 'https://idwrhghteppqmagmlpmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkd3JoZ2h0ZXBwcW1hZ21scG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NDYyOTEsImV4cCI6MjAzMTMyMjI5MX0.F-0AtBSKW42urpfiE5HW36lJqBDHTWHghFRwuz2P1fc'
const supabase = createClient(supabaseUrl, supabaseKey);


async function getEmployee(id) {

    const {data: Employee, error} = await supabase
        .from('Employee')
        .select('*')
        .eq('id', id)

    return Employee[0];
}

async function addEmployee(newUser) {

    const {data, error} = await supabase
        .from('Employee')
        .insert([
            {
                FirstName: newUser.firstName,
                LastName: newUser.lastName,
                Email: newUser.email
            },
        ])
        .select()

    if (error) {
        console.log(error)
        return
    }

    alert('New User Created')
    redirect('/account/dashboard')
}

export {supabase, getEmployee, addEmployee};
