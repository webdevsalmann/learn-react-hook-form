import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { continents } from './lib/data';
import { Checkbox } from './components/ui/checkbox';

/*
first name
last name
gender
dob
email
bio
country
Profile Picture
terms and conditions
*/

type FormValues = {
  firstname: string;
  lastname: string;
  gender: string;
  dob: string;
  email: string;
  bio: string;
  social: {
    facebook: "",
    twitter: ""
  };
  continent: string;
  country: string;
  profile: string;
  terms: boolean;
}

let renderCount = 0;
function UserProfileForm() {

  const form = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      gender: "",
      dob: "",
      email: "",
      bio: "",
      social: {
        facebook: "",
        twitter: ""
      },
      continent: "",
      country: "",
      profile: "",
      terms: false,
    }
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;


  const handleOnSubimit = (data: FormValues) => {
    console.log("Datas~ ", data)
  }


  renderCount++;
  console.log("Errors~ ", errors)
  return (
    <div className="mx-auto mb-60 w-full sm:w-2/4 rounded p-4">
      <h1 className="text-center">User Profile form ({renderCount / 2})</h1>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit(handleOnSubimit)} noValidate>

        <div className="flex flex-col md:flex-row gap-4">
          {/* FIRST NAME  */}
          <div className='w-full'>
            <Label className='font-semibold' htmlFor="firstname">First Name</Label>
            <Input className="mt-1" type="text" id="firstname"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "First name is required"
                },
                maxLength: {
                  value: 30,
                  message: "maximum 30 characters can be used in first name"
                }
              })}
            />
            <p className="text-destructive">{errors.firstname?.message}</p>
          </div>

          {/* LAST NAME */}
          <div className='w-full'>
            <Label className="font-semibold" htmlFor="lastname">Last Name</Label>
            <Input className="mt-1 w-full" type="text" id="lastname"
              {...register("lastname")}
            />
            <p className="text-destructive">{errors.lastname?.message}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* GENDER */}
          <div className='w-full'>
            <Label className="font-semibold" htmlFor="gender">Gender </Label>
            <RadioGroup className='mt-1 flex gap-2' {...register("gender", {
              required: {
                value: true,
                message: "Please select your gender"
              }
            })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="r3" />
                <Label htmlFor="r3">Other</Label>
              </div>
            </RadioGroup>
            <p className="text-destructive">{errors.gender?.message}</p>
          </div>

          {/* DATE OF BIRTH */}
          <div className='w-full'>
            <Label className="font-semibold block" htmlFor="dob">Date of Birth</Label>
            <Input className="mt-2 w-full" type="date" id="lastname"
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Date of birth is required"
                }
              })}
            />
            <p className="text-destructive">{errors.dob?.message}</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className='w-full'>
          <Label className="font-semibold" htmlFor="email">Email</Label>
          <Input className="mt-1 w-full" type="email" id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email"
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email pattern"
              }
            })}
          />
          <p className="text-destructive">{errors.email?.message}</p>
        </div>

        {/* Biography */}
        <div className='w-full'>
          <Label className="font-semibold" htmlFor="bio">Bio</Label>
          <Textarea className="mt-1 w-full" id='bio'
            {...register("bio")} />
          <p className="text-destructive">{errors.bio?.message}</p>
        </div>

        <div className="md:flex gap-4">
          {/* CONTINENT */}
          <div className='w-full'>
            <Label className="font-semibold" htmlFor="continent">Continent</Label>
            <Select id="continent" {...register("continent")}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select Continent" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id='continent'  {...register("continent")}>
                  <SelectLabel>Continents</SelectLabel>
                  {continents.map(item => (
                    <SelectItem key={item.name} value={item.name}>
                      <option value={item.name}>{item.name}</option>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <select>
              {continents.map(item => (
                <option key={item.name} value={item.name}>{item.name}</option>
                ))}
            </select> */}
            <p className="text-destructive">{errors.bio?.message}</p>
          </div>

          {/* Country */}
          <div className='w-full'>
            <Label className="font-semibold" htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {continents.map(item => (
                    <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-destructive">{errors.bio?.message}</p>
          </div>
        </div>

        {/* TERMS AND CONDITION */}
        <div className='w-full flex items-center space-x-2'>
          <Checkbox id="terms"
            {...register("terms")} />
          <Label className="font-semibold" htmlFor="terms">
            Accept terms and conditions
          </Label>
          <p className="text-destructive">{errors.firstname?.message}</p>
        </div>

        <Button className="mt-4" variant="secondary" type="submit">Submit</Button>
      </form >
      <DevTool control={control} />
    </div >
  );
}

export default UserProfileForm;
