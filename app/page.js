import Image from "next/image";
import { Search } from 'lucide-react'
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
          <CardContent className="flex items-center justify-start p-6 gap-6">
            <div className="flex items-center gap-6">
              <Image
                src={"/images.png"}
                width={80}
                height={80}
                alt="image.png"
                className="rounded-xl"
              />
              <div className="text-slate-800">
                <h1 className="text-5xl font-bold mb-2">Irtysh Echo</h1>
                <p>Find the best cultural events in Pavlodar</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-auto mr-20 justify-center">
              <h2 className="w-[200px] text-2xl font-bold">Search an event</h2>
              <div className=" relative">
                <Search className="absolute top-2 left-2 text-slate-600" width={20} />
                <Input type="text" placeholder="       Search an event" />
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
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
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/aima.jpg"}
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/chekhov.jpg"}
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
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
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/baisak.jpg"}
                        width={400}
                        height={200}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Филармония имени Исы Байзакова
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/college.jpeg"}
                        width={400}
                        height={400}
                        alt="img.png"
                        className=" object-cover rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        Музыкальный колледж
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="p-0">
                      <Image
                        src={"/school.jpg"}
                        width={320}
                        height={200}
                        alt="img.png"
                        className=" rounded-t-xl"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Павлодарский музыкальная школа</CardTitle>
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
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
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
                  <Card className="flex flex-col">
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cinema">
              <Card className="py-16">
                {/* <CardHeader className="text-center">
                  <CardTitle className="text-4xl">Theatr</CardTitle>
                  <CardDescription>Observe nearest events</CardDescription>
                </CardHeader> */}
                <CardContent className="w-full mx-auto px-20 grid grid-cols-3 gap-20">
                  <Card className="flex flex-col">
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
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
                    <CardFooter className="mt-auto">
                      <Button className="bg-red-500 text-base">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="w-[1300px] mx-auto flex flex-col justify-center items-start my-20 gap-6">
        <CardHeader className="w-full items-center justify-center">
          <CardTitle className="text-3xl">Покупай продукты молодых талантов</CardTitle>
          <CardDescription className="text-lg">
            Объекты исскуства сделанные руками молодых талантов
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 justify-items-center items-center gap-8 w-full">
          <Card className="w-[550px]">
            <CardContent className="p-0 flex gap-4">
              <Image
                src={"/bag.jpeg"}
                width={180}
                height={200}
                className=" h-[180px] rounded-bl-lg rounded-tl-xl object-cover"
                alt="bag"
              />
              <div className="flex flex-col items-start mt-2">
                <h1 className="text-xl font-semibold">
                  Рюкзак с этническим дизайном
                </h1>
                <p className="text-base text-slate-700">
                  Просторный рюкзак, украшенный казахским национальным
                  орнаментом
                </p>
                <h2 className="text-2xl font-bold mt-2 text-yellow-700">
                  3990тг.
                </h2>
                <Button className="mt-auto mb-4 mr-4 self-end bg-red-600">
                  Добавить в корзину
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[550px]">
            <CardContent className="p-0 flex gap-4">
              <Image
                src={"/bag2.jpeg"}
                width={180}
                height={200}
                className="h-[180px] rounded-bl-lg rounded-tl-xl object-cover"
                alt="bag2"
              />
              <div className="flex flex-col items-start mt-2">
                <h1 className="text-xl font-semibold">Cумка с орнаментом</h1>
                <p className="text-base text-slate-700">
                  Ее дизайн включает богатую палитру красок
                </p>
                <h2 className="text-2xl font-bold mt-2 text-yellow-700">
                  3990тг.
                </h2>
                <Button className="mt-auto mb-4 mr-4 self-end bg-red-600">
                  Добавить в корзину
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[550px]">
            <CardContent className="p-0 flex gap-4">
              <Image
                src={"/knives.jpeg"}
                width={180}
                height={200}
                alt="knives"
                className="h-[180px] rounded-bl-lg rounded-tl-xl object-cover"
              />
              <div className="flex flex-col items-start mt-2">
                <h1 className="text-xl font-semibold">
                  Серьги с совиным пером
                </h1>
                <p className="text-base text-slate-700">
                  Украшение, которое сочетает традиционные мотивы
                </p>
                <h2 className="text-2xl font-bold mt-2 text-yellow-700">
                  3990тг.
                </h2>
                <Button className="mt-auto mb-4 mr-4 self-end bg-red-600">
                  Добавить в корзину
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[550px]">
            <CardContent className="p-0 flex gap-4">
              <Image
                src={"/toy.jpeg"}
                width={180}
                height={200}
                alt="knives"
                className=" h-[180px] rounded-bl-lg rounded-tl-xl object-cover"
              />
              <div className="flex flex-col items-start mt-2">
                <h1 className="text-xl font-semibold">
                  Казахская мягкая игрушка
                </h1>
                <p className="text-base text-slate-700">
                  Мягкая плюшевая игрушка в форме оленя
                </p>
                <h2 className="text-2xl font-bold mt-2 text-yellow-700">
                  3990тг.
                </h2>
                <Button className="mt-auto mb-4 mr-4 self-end text-sm bg-red-600">
                  Добавить в корзину
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
