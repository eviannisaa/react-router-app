import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Welcome() {
     return (
          <main className="flex items-center justify-center pt-16 pb-4">
               <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                    <div className="max-w-[80%] w-full space-y-6 px-4 flex items-center justify-center bg-neutral-200 h-144 rounded-xl">
                         <div className="flex flex-col gap-2 text-center">
                              Hello.
                              <Button
                                   onClick={() =>
                                        (window.location.href = "/test-layout")
                                   }
                              >
                                   See Assessment
                              </Button>
                         </div>
                    </div>
               </div>
          </main>
     );
}
