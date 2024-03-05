import Feed from "@src/components/Feed"

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className = "head_text text-center">
            Discover & Share
            <br className = "max-md:hidden"/>
            <span className = " orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className = " desc text-center">
            PromptPilot is a freely available AI prompting tool designed for the contemporary era, enabling users to explore, generate, and distribute imaginative prompts.
        </p>
        <Feed/>
    </section>
  )
}

export default Home