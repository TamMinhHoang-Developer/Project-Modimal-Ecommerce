import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-black-olive text-white">
      <div className="max-w-container mx-auto overflow-hidden pt-52 pb-32">
        <div className="flex gap-104">
          <div className="flex-1">
            <h5 className="font-bold text-20">
              Join our club, get 15% off for your Birthday
            </h5>
            <Input
              className="mt-24"
              placeholder="Enter Your Email Address"
            ></Input>
            <p className="mt-16 flex gap-8 items-center">
              <Checkbox />
              <p>
                By Submittng your email, you agree to receive advertising emails
                from Modimal.
              </p>
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-24">
              <div>fwefe</div>
              <div>fwefe</div>
              <div>fwefe</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
