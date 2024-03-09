import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = {
    username: string;
    email: string;
    channel: string;
}

let renderCount = 0;
export default function Form() {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const handleOnSubimit = (data: FormValues) => {
        console.log(data)
    }


    renderCount++;
    return (
        <div className="mx-auto w-full sm:w-2/4 md:w-1/4 border rounded p-4">
            <h2 className="text-center">Learning react hook form ({renderCount / 2})</h2>
            <form id="f" className="form" onSubmit={handleSubmit(handleOnSubimit)}>

                <div className="mt-6">
                    <label htmlFor="username">Username</label>
                    <Input className="mt-2" type="text" id="username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "username is required"
                            }
                        })}
                    />
                    <p className="text-destructive">{errors.username?.message}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="email">Email</label>
                    <Input className="mt-2" type="text" id="email" {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        }
                    })} />
                    <p className="text-destructive">{errors.email?.message}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="channel">Channel</label>
                    <Input className="mt-2" type="text" id="channel" {...register("channel", {
                        required: {
                            value: true,
                            message: "Channel Name is required"
                        }
                    })} />
                    <p className="text-destructive">{errors.channel?.message}</p>
                </div>
                <Button className="mt-4" variant="secondary" type="submit">Submit</Button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
