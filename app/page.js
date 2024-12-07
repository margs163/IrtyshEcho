import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-slate-700">
      <header className="flex items-center justify-center mt-20">
        <Card className="w-[1300px] border-2">
          <CardContent className="flex items-center justify-between p-6 gap-6">
            <div className="flex items-center gap-6">
              <Image
                src={"/images.png"}
                width={80}
                height={80}
                alt="image.png"
                className="rounded-xl"
              />
              <div className="text-slate-800">
                <h1 className="text-5xl font-bold">Pavlodar Culture</h1>
                <p>Find the best cultural events in Pavlodar</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="w-[200px] text-2xl font-bold">Choose a date</h2>
              <Input type="date" />
            </div>
          </CardContent>
        </Card>
      </header>
      <Card className="w-[1300px] mx-auto flex justify-center items-start mt-20">
        <CardContent className="w-full p-4">
          <Tabs
            defaultValue="account"
            className="w-full mx-auto flex justify-center flex-col"
          >
            <TabsList className="text-2xl w-full mx-auto py-10 flex justify-evenly bg-slate-100 font-semibold">
              <TabsTrigger
                className="text-xl font-medium py-3 data-[state=active]:bg-red-500 rounded-xl data-[state=active]:text-white"
                value="art"
              >
                Изобразительное Исскуство
              </TabsTrigger>
              <TabsTrigger
                className="text-xl font-medium py-3 data-[state=active]:bg-red-500 rounded-xl data-[state=active]:text-white"
                value="theatr"
              >
                Театр
              </TabsTrigger>
              <TabsTrigger
                className="text-xl font-medium py-3 data-[state=active]:bg-red-500 rounded-xl data-[state=active]:text-white"
                value="music"
              >
                Музыка
              </TabsTrigger>
              <TabsTrigger
                className="text-xl font-medium py-3 data-[state=active]:bg-red-500 rounded-xl data-[state=active]:text-white"
                value="literature"
              >
                Литература
              </TabsTrigger>
              <TabsTrigger
                className="text-xl font-medium py-3 data-[state=active]:bg-red-500 rounded-xl data-[state=active]:text-white"
                value="cinema"
              >
                Музей
              </TabsTrigger>
            </TabsList>
            <TabsContent value="art">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/Aina.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Историко-краеведческий музей имени Г. Потанина
                      </CardTitle>
                      <CardDescription>
                        Павлодарский областной историко-краеведческий музей
                        имени Г. Потанина — это уникальный культурный и
                        образовательный центр, хранящий богатое историческое и
                        культурное наследие Павлодарской области Казахстана.
                        Музей был основан в 1920.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/Buhar.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Музей литературы и искусства имени Бухар жырау
                      </CardTitle>
                      <CardDescription>
                        Культурное учреждение, расположенное в Павлодаре,
                        которое является основой сохранения и популяризации
                        казахского литературного и художественного наследия.
                        Музей хранит имя выдающегося казахского поэта, философа
                        и общественного деятеля Бухара Жырау.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/Xud.jpeg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Павлодарский художественный музей</CardTitle>
                      <CardDescription>
                        Это важное культурное учреждение, расположенное в
                        Павлодаре, в котором хранятся библиотеки и произведения
                        искусства, отражающие богатую художественную традицию
                        региона и Казахстана в целом. Музей является центром
                        культурной жизни города и важным звеном в сохранении и
                        популяризации художественного наследия.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="theatr">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Aimauit.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Театр имени Аймауытов</CardTitle>
                      <CardDescription>
                        Драматический театр Чехова в Павлодаре — это культурный
                        центр, который уже более полувека играет важную роль
                        театральной жизни города и области. Театр был основан с
                        целью привнести в культурное наследие Павлодара лучшие
                        образцы отечественного и ирландского драматического
                        искусства, и с тех пор постоянно радует зрителей яркими
                        постановками и талантами.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Chekhov.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Театр имени Чехова</CardTitle>
                      <CardDescription>
                        Драматический театр Чехова в Павлодаре — это культурный
                        центр, который уже более полувека играет важную роль
                        театральной жизни города и области. Театр был основан с
                        целью привнести в культурное наследие Павлодара лучшие
                        образцы отечественного и ирландского драматического
                        искусства, и с тех пор постоянно радует зрителей яркими
                        постановками и талантами.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/orig.jpeg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Шанырак</CardTitle>
                      <CardDescription>
                        «Шанырак Орталығы» — это уникальный культурный и
                        образовательный центр, расположенный в городе Павлодар,
                        который играет важную роль в сохранении и развитии
                        казахских традиций, культуры и национальной
                        идентичности.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500">Learn More</Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="music">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/potanin.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Историко-краеведческий музей имени Г. Потанина
                      </CardTitle>
                      <CardDescription>
                        Павлодарский областной историко-краеведческий музей
                        имени Г. Потанина — это уникальный культурный и
                        образовательный центр, хранящий богатое историческое и
                        культурное наследие Павлодарской области Казахстана.
                        Музей был основан в 1920.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/Buhar.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Музей литературы и искусства имени Бухар жырау
                      </CardTitle>
                      <CardDescription>
                        Культурное учреждение, расположенное в Павлодаре,
                        которое является основой сохранения и популяризации
                        казахского литературного и художественного наследия.
                        Музей хранит имя выдающегося казахского поэта, философа
                        и общественного деятеля Бухара Жырау.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/Xud.jpeg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Павлодарский художественный музей</CardTitle>
                      <CardDescription>
                        Это важное культурное учреждение, расположенное в
                        Павлодаре, в котором хранятся библиотеки и произведения
                        искусства, отражающие богатую художественную традицию
                        региона и Казахстана в целом. Музей является центром
                        культурной жизни города и важным звеном в сохранении и
                        популяризации художественного наследия.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="literature">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/potanin.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Историко-краеведческий музей имени Г. Потанина
                      </CardTitle>
                      <CardDescription>
                        Павлодарский областной историко-краеведческий музей
                        имени Г. Потанина — это уникальный культурный и
                        образовательный центр, хранящий богатое историческое и
                        культурное наследие Павлодарской области Казахстана.
                        Музей был основан в 1920.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Buhar.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Музей литературы и искусства имени Бухар жырау
                      </CardTitle>
                      <CardDescription>
                        Культурное учреждение, расположенное в Павлодаре,
                        которое является основой сохранения и популяризации
                        казахского литературного и художественного наследия.
                        Музей хранит имя выдающегося казахского поэта, философа
                        и общественного деятеля Бухара Жырау.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Xud.jpeg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Павлодарский художественный музей</CardTitle>
                      <CardDescription>
                        Это важное культурное учреждение, расположенное в
                        Павлодаре, в котором хранятся библиотеки и произведения
                        искусства, отражающие богатую художественную традицию
                        региона и Казахстана в целом. Музей является центром
                        культурной жизни города и важным звеном в сохранении и
                        популяризации художественного наследия.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="museum">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/potanin.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Историко-краеведческий музей имени Г. Потанина
                      </CardTitle>
                      <CardDescription>
                        Павлодарский областной историко-краеведческий музей
                        имени Г. Потанина — это уникальный культурный и
                        образовательный центр, хранящий богатое историческое и
                        культурное наследие Павлодарской области Казахстана.
                        Музей был основан в 1920.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Buhar.jpg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Музей литературы и искусства имени Бухар жырау
                      </CardTitle>
                      <CardDescription>
                        Культурное учреждение, расположенное в Павлодаре,
                        которое является основой сохранения и популяризации
                        казахского литературного и художественного наследия.
                        Музей хранит имя выдающегося казахского поэта, философа
                        и общественного деятеля Бухара Жырау.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="">
                    <CardContent className="p-0">
                      <Image
                        src={"/Xud.jpeg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Павлодарский художественный музей</CardTitle>
                      <CardDescription>
                        Это важное культурное учреждение, расположенное в
                        Павлодаре, в котором хранятся библиотеки и произведения
                        искусства, отражающие богатую художественную традицию
                        региона и Казахстана в целом. Музей является центром
                        культурной жизни города и важным звеном в сохранении и
                        популяризации художественного наследия.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
