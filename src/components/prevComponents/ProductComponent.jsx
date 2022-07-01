import React from 'react'

const ProductComponent = ()=> {
  return (
  
<div className="py-16">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-28 mb-28">
        <div className="mb-12 space-y-2">
          <span className="text-cyan-600">Products</span>
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Sharing is Caring</h2>
          <p className="lg:w-6/12">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="group space-y-4">
            <img src="https://tailus.io/sources/blocks/twocolumns/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl"/>
            <div className="space-y-2">
              <span className="text-cyan-500">Frontend</span>
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-700">Provident id nesciunt illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p className="text-gray-600">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt dolorum.</p>
              </div>
            </div>
            <a href="#" className="block w-max text-cyan-600">Read more</a>
          </div>
          <div className="group space-y-4">
            <img src="https://tailus.io/sources/blocks/twocolumns/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl"/>
            <div className="space-y-2">
              <span className="text-cyan-500">Frontend</span>
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-700">Provident id nesciunt illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p className="text-gray-600">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt dolorum.</p>
              </div>
            </div>
            <a href="#" className="block w-max text-cyan-600">Read more</a>
          </div>
          
          <div className="group space-y-4">
            <img src="https://tailus.io/sources/blocks/twocolumns/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl"/>
            <div className="space-y-2">
              <span className="text-cyan-500">Backend</span>
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-700">Provident id nesciunt illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p className="text-gray-600">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt dolorum.</p>
              </div>
            </div>
            <a href="#" className="block w-max text-cyan-600">Read more</a>
          </div>
        </div>
    </div>
</div>
                                
  )
}

export default ProductComponent